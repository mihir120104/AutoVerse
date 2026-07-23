from fastapi import HTTPException
from sqlalchemy.orm import Session

from app.models.purchase import Purchase
from app.repositories.purchase_repository import PurchaseRepository
from app.repositories.vehicle_repository import VehicleRepository
from app.schemas.purchase import PurchaseCreate


class PurchaseService:

    @staticmethod
    def purchase_vehicle(
        db: Session,
        payload: PurchaseCreate,
    ):
        vehicle = VehicleRepository.get_by_id(
            db,
            payload.vehicle_id,
        )

        if vehicle is None:
            raise HTTPException(
                status_code=404,
                detail="Vehicle not found",
            )

        if vehicle.quantity < payload.quantity:
            raise HTTPException(
                status_code=400,
                detail="Not enough stock available",
            )

        vehicle.quantity -= payload.quantity

        VehicleRepository.update(
            db,
            vehicle,
        )

        purchase = Purchase(
            vehicle_id=payload.vehicle_id,
            quantity=payload.quantity,
        )

        return PurchaseRepository.create(
            db,
            purchase,
        )

    @staticmethod
    def get_purchase_history(
        db: Session,
    ):
        return PurchaseRepository.get_all(db)