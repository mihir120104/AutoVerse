from typing import Optional

from pydantic import BaseModel, ConfigDict, Field


class VehicleBase(BaseModel):
    make: str = Field(..., min_length=2)
    model: str
    category: str
    year: int
    fuel_type: str
    transmission: str
    price: float
    quantity: int
    image_url: str
    description: str


class VehicleCreate(VehicleBase):
    pass


class VehicleUpdate(BaseModel):
    make: Optional[str] = None
    model: Optional[str] = None
    category: Optional[str] = None
    year: Optional[int] = None
    fuel_type: Optional[str] = None
    transmission: Optional[str] = None
    price: Optional[float] = None
    quantity: Optional[int] = None
    image_url: Optional[str] = None
    description: Optional[str] = None


class VehicleResponse(VehicleBase):
    id: int

    model_config = ConfigDict(
        from_attributes=True
    )