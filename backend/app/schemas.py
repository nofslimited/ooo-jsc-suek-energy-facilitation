from pydantic import BaseModel

class ContactCreate(BaseModel):
    name: str
    email: str
    phone: str | None = None
    company: str | None = None
    subject: str
    message: str


class ContactRead(ContactCreate):
    id: int

    class Config:
        from_attributes = True