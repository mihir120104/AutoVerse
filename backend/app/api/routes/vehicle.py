from fastapi import APIRouter, Depends, Query, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.vehicle import (
    VehicleCreate,
    VehicleResponse,
    VehicleUpdate,
)
from app.services.vehicle_service import VehicleService

router = APIRouter(
    prefix="/api/vehicles",
    tags=["Vehicles"],
)


@router.post(
    "",
    response_model=VehicleResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_vehicle(
    payload: VehicleCreate,
    db: Session = Depends(get_db),
):
    return VehicleService.create_vehicle(db, payload)


@router.get(
    "",
    response_model=list[VehicleResponse],
)
def get_all_vehicles(
    db: Session = Depends(get_db),
):
    return VehicleService.get_all_vehicles(db)


@router.get(
    "/{vehicle_id}",
    response_model=VehicleResponse,
)
def get_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
):
    return VehicleService.get_vehicle_by_id(
        db,
        vehicle_id,
    )


@router.put(
    "/{vehicle_id}",
    response_model=VehicleResponse,
)
def update_vehicle(
    vehicle_id: int,
    payload: VehicleUpdate,
    db: Session = Depends(get_db),
):
    return VehicleService.update_vehicle(
        db,
        vehicle_id,
        payload,
    )


@router.delete(
    "/{vehicle_id}",
)
def delete_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
):
    return VehicleService.delete_vehicle(
        db,
        vehicle_id,
    )


@router.get(
    "/search",
    response_model=list[VehicleResponse],
)
def search_vehicle(
    make: str | None = Query(None),
    model: str | None = Query(None),
    category: str | None = Query(None),
    min_price: float | None = Query(None),
    max_price: float | None = Query(None),
    db: Session = Depends(get_db),
):
    return VehicleService.search_vehicles(
        db=db,
        make=make,
        model=model,
        category=category,
        min_price=min_price,
        max_price=max_price,
    )


@router.post(
    "/{vehicle_id}/purchase",
)
def purchase_vehicle(
    vehicle_id: int,
    db: Session = Depends(get_db),
):
    return VehicleService.purchase_vehicle(
        db,
        vehicle_id,
    )


@router.post(
    "/{vehicle_id}/restock",
)
def restock_vehicle(
    vehicle_id: int,
    quantity: int,
    db: Session = Depends(get_db),
):
    return VehicleService.restock_vehicle(
        db,
        vehicle_id,
        quantity,
    )