from datetime import datetime

from sqlalchemy import DateTime, Float, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class Vehicle(Base):
    __tablename__ = "vehicles"

    id: Mapped[int] = mapped_column(primary_key=True)

    make: Mapped[str] = mapped_column(String(100), nullable=False)

    model: Mapped[str] = mapped_column(String(100), nullable=False)

    category: Mapped[str] = mapped_column(String(50), nullable=False)

    year: Mapped[int] = mapped_column(Integer)

    fuel_type: Mapped[str] = mapped_column(String(30))

    transmission: Mapped[str] = mapped_column(String(30))

    price: Mapped[float] = mapped_column(Float)

    quantity: Mapped[int] = mapped_column(Integer)

    image_url: Mapped[str] = mapped_column(String(500))

    description: Mapped[str] = mapped_column(String(1000))

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )