import os
import requests

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base
from . import models, schemas

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OOO JSC SUEK Backend")

# CORS (adjust later if needed)
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

# Database dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# 🔥 SENDGRID EMAIL FUNCTION
def send_email_notification(contact: schemas.ContactCreate):
    api_key = os.getenv("SENDGRID_API_KEY")
    email_from = os.getenv("EMAIL_FROM")
    email_to = os.getenv("EMAIL_TO")

    if not api_key:
        print("SendGrid API key missing")
        return

    data = {
        "personalizations": [
            {
                "to": [{"email": email_to}],
                "subject": f"New Inquiry: {contact.subject}",
            }
        ],
        "from": {"email": email_from},
        "reply_to": {"email": contact.email},
        "content": [
            {
                "type": "text/plain",
                "value": f"""
New Website Inquiry

Name: {contact.name}
Email: {contact.email}
Phone: {contact.phone or "Not provided"}
Company: {contact.company or "Not provided"}
Subject: {contact.subject}

Message:
{contact.message}
""",
            }
        ],
    }

    try:
        response = requests.post(
            "https://api.sendgrid.com/v3/mail/send",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            json=data,
        )

        print("SendGrid response:", response.status_code, response.text)

    except Exception as e:
        print("SendGrid error:", str(e))


# Health check (so "/" no longer shows Not Found)
@app.get("/")
def health_check():
    return {
        "status": "online",
        "service": "OOO JSC SUEK Backend",
        "docs": "/docs",
    }


# ✅ CREATE CONTACT
@app.post("/contact", response_model=schemas.ContactRead)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)

    # Send email
    send_email_notification(contact)

    return db_contact


# ✅ GET CONTACTS
@app.get("/contacts", response_model=list[schemas.ContactRead])
def get_contacts(db: Session = Depends(get_db)):
    return db.query(models.Contact).order_by(models.Contact.id.desc()).all()