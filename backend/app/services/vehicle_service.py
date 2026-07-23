from typing import List, Optional

from fastapi import HTTPException, status
from sqlalchemy.orm import Session

from app.models.vehicle import Vehicle
from app.repositories.vehicle_repository import VehicleRepository
from app.schemas.vehicle import VehicleCreate, VehicleUpdate


class VehicleService:
    @staticmethod
    def create_vehicle(db: Session, payload: VehicleCreate) -> Vehicle:
        vehicle = Vehicle(
            make=payload.make,
            model=payload.model,
            category=payload.category,
            year=payload.year,
            fuel_type=payload.fuel_type,
            transmission=payload.transmission,
            price=payload.price,
            quantity=payload.quantity,
            image_url=payload.image_url,
            description=payload.description,
        )

        return VehicleRepository.create(db, vehicle)

    @staticmethod
    def get_all_vehicles(db: Session) -> List[Vehicle]:
        return VehicleRepository.get_all(db)

    @staticmethod
    def get_vehicle_by_id(db: Session, vehicle_id: int) -> Vehicle:
        vehicle = VehicleRepository.get_by_id(db, vehicle_id)

        if vehicle is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Vehicle not found",
            )

        return vehicle

    @staticmethod
    def update_vehicle(
        db: Session,
        vehicle_id: int,
        payload: VehicleUpdate,
    ) -> Vehicle:

        vehicle = VehicleRepository.get_by_id(db, vehicle_id)

        if vehicle is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Vehicle not found",
            )

        update_data = payload.model_dump(exclude_unset=True)

        for key, value in update_data.items():
            setattr(vehicle, key, value)

        return VehicleRepository.update(db, vehicle)

    @staticmethod
    def delete_vehicle(db: Session, vehicle_id: int):

        vehicle = VehicleRepository.get_by_id(db, vehicle_id)

        if vehicle is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Vehicle not found",
            )

        VehicleRepository.delete(db, vehicle)

        return {
            "message": "Vehicle deleted successfully"
        }

    @staticmethod
    def search_vehicles(
        db: Session,
        make: Optional[str] = None,
        model: Optional[str] = None,
        category: Optional[str] = None,
        min_price: Optional[float] = None,
        max_price: Optional[float] = None,
    ):
        return VehicleRepository.search(
            db=db,
            make=make,
            model=model,
            category=category,
            min_price=min_price,
            max_price=max_price,
        )

    @staticmethod
    def purchase_vehicle(
        db: Session,
        vehicle_id: int,
    ):

        vehicle = VehicleRepository.get_by_id(db, vehicle_id)

        if vehicle is None:
            raise HTTPException(
                status_code=404,
                detail="Vehicle not found",
            )

        if vehicle.quantity <= 0:
            raise HTTPException(
                status_code=400,
                detail="Vehicle out of stock",
            )

        vehicle.quantity -= 1

        VehicleRepository.update(db, vehicle)

        return {
            "message": "Vehicle purchased successfully",
            "remaining_stock": vehicle.quantity,
        }

    @staticmethod
    def restock_vehicle(
        db: Session,
        vehicle_id: int,
        quantity: int,
    ):

        vehicle = VehicleRepository.get_by_id(db, vehicle_id)

        if vehicle is None:
            raise HTTPException(
                status_code=404,
                detail="Vehicle not found",
            )

        if quantity <= 0:
            raise HTTPException(
                status_code=400,
                detail="Quantity must be greater than zero",
            )

        vehicle.quantity += quantity

        VehicleRepository.update(db, vehicle)

        return {
            "message": "Vehicle restocked successfully",
            "current_stock": vehicle.quantity,
        }