from pydantic import BaseModel, ConfigDict


class PurchaseCreate(BaseModel):
    vehicle_id: int
    quantity: int = 1


class PurchaseResponse(BaseModel):
    id: int
    vehicle_id: int
    quantity: int

    model_config = ConfigDict(
        from_attributes=True
    )