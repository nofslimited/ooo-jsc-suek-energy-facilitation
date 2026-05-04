from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from .database import SessionLocal, engine, Base
from . import models, schemas

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OOO JSC SUEK Backend")

# CORS (IMPORTANT for frontend connection)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # we lock this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency (DB session)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ✅ CREATE CONTACT (from your form)
@app.post("/contact", response_model=schemas.ContactRead)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    db_contact = models.Contact(**contact.model_dump())
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact


# ✅ GET ALL CONTACTS (for admin dashboard later)
@app.get("/contacts", response_model=list[schemas.ContactRead])
def get_contacts(db: Session = Depends(get_db)):
    return db.query(models.Contact).all()