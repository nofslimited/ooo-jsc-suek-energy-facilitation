import os
import resend

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base
from . import models, schemas

Base.metadata.create_all(bind=engine)

app = FastAPI(title="OOO JSC SUEK Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://ooojscsuek.ru",
        "https://www.ooojscsuek.ru",
        "https://ooo-jsc-suek-energy-facilitation.onrender.com",
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


def send_admin_notification(contact: schemas.ContactCreate):
    api_key = os.getenv("RESEND_API_KEY")
    email_from = os.getenv("EMAIL_FROM")
    email_to = os.getenv("EMAIL_TO")

    if not api_key or not email_from or not email_to:
        print("Admin email settings missing")
        return

    resend.api_key = api_key

    try:
        resend.Emails.send({
            "from": email_from,
            "to": email_to,
            "subject": f"New Inquiry: {contact.subject}",
            "html": f"""
                <h2>New Website Inquiry</h2>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone or "Not provided"}</p>
                <p><strong>Company:</strong> {contact.company or "Not provided"}</p>
                <p><strong>Subject:</strong> {contact.subject}</p>
                <hr />
                <p><strong>Message:</strong></p>
                <p>{contact.message}</p>
            """
        })

    except Exception as error:
        print("Admin email error:", str(error))


def send_client_acknowledgment(contact: schemas.ContactCreate):
    api_key = os.getenv("RESEND_API_KEY")
    email_from = os.getenv("EMAIL_FROM")

    if not api_key or not email_from:
        print("Client acknowledgment settings missing")
        return

    resend.api_key = api_key

    try:
        resend.Emails.send({
            "from": email_from,
            "to": contact.email,
            "subject": "We Received Your Inquiry | OOO JSC SUEK Energy Facilitation",
            "html": f"""
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2>Thank you for contacting OOO JSC SUEK Energy Facilitation</h2>

                    <p>Dear {contact.name},</p>

                    <p>
                        We have successfully received your inquiry regarding:
                        <strong>{contact.subject}</strong>.
                    </p>

                    <p>
                        Our commercial team will carefully review your request
                        and contact you shortly.
                    </p>

                    <p>
                        If your request is urgent, you may also contact us directly:
                    </p>

                    <ul>
                        <li><strong>Phone / WhatsApp:</strong> +7 926 503 82 48</li>
                        <li><strong>Email:</strong> info@ooojscsuek.ru</li>
                        <li><strong>Website:</strong> https://www.ooojscsuek.ru</li>
                    </ul>

                    <hr />

                    <p><strong>Your submitted message:</strong></p>
                    <p>{contact.message}</p>

                    <hr />

                    <p>
                        Best regards,<br />
                        <strong>OOO JSC SUEK Energy Facilitation</strong><br />
                        Moscow, Russia
                    </p>
                </div>
            """
        })

    except Exception as error:
        print("Client acknowledgment error:", str(error))


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

    send_admin_notification(contact)
    send_client_acknowledgment(contact)

    return db_contact


@app.get("/contacts", response_model=list[schemas.ContactRead])
def get_contacts(db: Session = Depends(get_db)):
    return db.query(models.Contact).order_by(models.Contact.id.desc()).all()


@app.delete("/contacts/{contact_id}")
def delete_contact(contact_id: int, db: Session = Depends(get_db)):
    contact = db.query(models.Contact).filter(models.Contact.id == contact_id).first()

    if not contact:
        raise HTTPException(status_code=404, detail="Inquiry not found")

    db.delete(contact)
    db.commit()

    return {
        "success": True,
        "message": f"Inquiry #{contact_id} deleted successfully",
    }