import os
import resend

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base
from . import models, schemas

# Create DB tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OOO JSC SUEK Backend")

# CORS
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


# 🔥 RESEND EMAIL FUNCTION
def send_email_notification(contact: schemas.ContactCreate):
    api_key = os.getenv("RESEND_API_KEY")

    if not api_key:
        print("Resend API key missing")
        return

    resend.api_key = api_key

    email_from = os.getenv("EMAIL_FROM")
    email_to = os.getenv("EMAIL_TO")

    try:
        response = resend.Emails.send({
            "from": email_from,
            "to": email_to,
            "subject": f"New Inquiry: {contact.subject}",
            "html": f"""
                <h2>New Website Inquiry</h2>

                <p><strong>Full Name:</strong> {contact.full_name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
                <p><strong>Company:</strong> {contact.company}</p>
                <p><strong>Subject:</strong> {contact.subject}</p>

                <hr>

                <p><strong>Message:</strong></p>
                <p>{contact.message}</p>
            """
        })

        print("Resend response:", response)

    except Exception as e:
        print("Resend error:", e)


# Health check
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