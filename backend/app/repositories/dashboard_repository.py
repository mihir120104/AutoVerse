from sqlalchemy import func
from sqlalchemy.orm import Session

from app.models.purchase import Purchase
from app.models.vehicle import Vehicle


class DashboardRepository:

    @staticmethod
    def get_stats(db: Session):

        total_vehicles = db.query(func.count(Vehicle.id)).scalar() or 0

        total_purchases = db.query(func.count(Purchase.id)).scalar() or 0

        low_stock = (
            db.query(func.count(Vehicle.id))
            .filter(Vehicle.quantity <= 5)
            .scalar()
            or 0
        )

        revenue = 0

        purchases = db.query(Purchase).all()

        for purchase in purchases:
            vehicle = db.query(Vehicle).filter(
                Vehicle.id == purchase.vehicle_id
            ).first()

            if vehicle:
                revenue += vehicle.price * purchase.quantity

        return {
            "total_vehicles": total_vehicles,
            "total_purchases": total_purchases,
            "total_revenue": revenue,
            "low_stock": low_stock,
        }