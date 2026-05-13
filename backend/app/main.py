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
        print("Resend admin email settings missing")
        return

    resend.api_key = api_key

    try:
        response = resend.Emails.send({
            "from": email_from,
            "to": email_to,
            "reply_to": contact.email,
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

        print("Admin notification sent:", response)

    except Exception as error:
        print("Admin notification error:", str(error))


def send_client_acknowledgment(contact: schemas.ContactCreate):
    api_key = os.getenv("RESEND_API_KEY")
    email_from = os.getenv("EMAIL_FROM")

    if not api_key or not email_from:
        print("Resend client acknowledgment settings missing")
        return

    resend.api_key = api_key

    try:
        response = resend.Emails.send({
            "from": email_from,
            "to": contact.email,
            "subject": "We received your inquiry - OOO JSC SUEK Energy Facilitation",
            "html": f"""
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
                    <h2>Thank you, {contact.name}</h2>

                    <p>
                        We have received your inquiry regarding:
                        <strong>{contact.subject}</strong>.
                    </p>

                    <p>
                        Our energy facilitation team will review your message and contact you
                        as soon as possible.
                    </p>

                    <hr />

                    <p><strong>Your submitted message:</strong></p>
                    <p>{contact.message}</p>

                    <hr />

                    <p>
                        Best regards,<br />
                        <strong>OOO JSC SUEK Energy Facilitation</strong><br />
                        Website: www.ooojscsuek.ru<br />
                        Email: info@ooojscsuek.ru
                    </p>
                </div>
            """
        })

        print("Client acknowledgment sent:", response)

    except Exception as error:
        print("Client acknowledgment error:", str(error))


@app.post("/admin/login", response_model=schemas.AdminLoginResponse)
def admin_login(payload: schemas.AdminLoginRequest):
    admin_username = os.getenv("ADMIN_USERNAME")
    admin_password = os.getenv("ADMIN_PASSWORD")
    admin_token = os.getenv("ADMIN_TOKEN")

    if not admin_username or not admin_password or not admin_token:
        raise HTTPException(
            status_code=500,
            detail="Admin login settings are missing"
        )

    if (
        payload.username != admin_username
        or payload.password != admin_password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid admin credentials"
        )

    return {
        "success": True,
        "token": admin_token,
    }


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
    contact = db.query(models.Contact).filter(
        models.Contact.id == contact_id
    ).first()

    if not contact:
        raise HTTPException(
            status_code=404,
            detail="Inquiry not found"
        )

    db.delete(contact)
    db.commit()

    return {
        "success": True,
        "message": f"Inquiry #{contact_id} deleted successfully",
    }