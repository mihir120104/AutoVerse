from sqlalchemy.orm import Session

from app.models.purchase import Purchase


class PurchaseRepository:

    @staticmethod
    def create(
        db: Session,
        purchase: Purchase,
    ):
        db.add(purchase)
        db.commit()
        db.refresh(purchase)

        return purchase

    @staticmethod
    def get_all(
        db: Session,
    ):
        return (
            db.query(Purchase)
            .order_by(Purchase.id.desc())
            .all()
        )