import os
import smtplib
from email.message import EmailMessage

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base
from . import models, schemas

Base.metadata.create_all(bind=engine)

app = FastAPI(title="OOO JSC SUEK Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://ooo-jsc-suek-energy-facilitation.onrender.com",
        "https://www.ooojscsuek.ru",
        "https://ooojscsuek.ru",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


def send_email_notification(contact: schemas.ContactCreate):
    smtp_host = os.getenv("SMTP_HOST")
    smtp_port = int(os.getenv("SMTP_PORT", "587"))
    smtp_user = os.getenv("SMTP_USER")
    smtp_password = os.getenv("SMTP_PASSWORD")
    notification_to = os.getenv("NOTIFICATION_TO", "info@ooojscsuek.ru")
    notification_from = os.getenv("NOTIFICATION_FROM", smtp_user or "info@ooojscsuek.ru")

    if not smtp_host or not smtp_user or not smtp_password:
        print("Email notification skipped: SMTP settings are missing.")
        return

    msg = EmailMessage()
    msg["Subject"] = f"New Website Inquiry: {contact.subject}"
    msg["From"] = notification_from
    msg["To"] = notification_to

    msg.set_content(
        f"""
New website inquiry received.

Name: {contact.name}
Email: {contact.email}
Phone: {contact.phone or "Not provided"}
Company: {contact.company or "Not provided"}
Subject: {contact.subject}

Message:
{contact.message}
"""
    )

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)


@app.get("/")
def health_check():
    return {
        "status": "online",
        "service": "OOO JSC SUEK Backend",
        "docs": "/docs",
    }


@app.post("/contact", response_model=schemas.ContactRead)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    try:
        send_email_notification(contact)
    except Exception as error:
        print(f"Email notification failed: {error}")

    return db_contact


@app.get("/contacts", response_model=list[schemas.ContactRead])
def get_contacts(db: Session = Depends(get_db)):
    return db.query(models.Contact).order_by(models.Contact.id.desc()).all()