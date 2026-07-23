from pydantic import BaseModel


class DashboardStats(BaseModel):
    total_vehicles: int
    total_purchases: int
    total_revenue: float
    low_stock: int