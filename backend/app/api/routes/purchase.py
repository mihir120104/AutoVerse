from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.purchase import PurchaseCreate, PurchaseResponse
from app.services.purchase_service import PurchaseService

router = APIRouter(
    prefix="/api/purchases",
    tags=["Purchases"],
)


@router.post(
    "",
    response_model=PurchaseResponse,
    status_code=status.HTTP_201_CREATED,
)
def purchase_vehicle(
    payload: PurchaseCreate,
    db: Session = Depends(get_db),
):
    return PurchaseService.purchase_vehicle(
        db,
        payload,
    )


@router.get(
    "",
    response_model=list[PurchaseResponse],
)
def get_purchase_history(
    db: Session = Depends(get_db),
):
    return PurchaseService.get_purchase_history(db)