from pydantic import BaseModel, ConfigDict


# ================= CONTACT =================

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: str | None = None
    company: str | None = None
    subject: str
    message: str


class ContactRead(ContactCreate):
    id: int

    model_config = ConfigDict(from_attributes=True)