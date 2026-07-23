from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


# Import models here
from app.models.user import User
from app.models.vehicle import Vehicle
from app.models.purchase import Purchase