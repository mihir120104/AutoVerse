from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.health import router as health_router
from app.database.base import Base
from app.database.session import engine
from app.api.routes.auth import router as auth_router
# Import all models so SQLAlchemy knows about them
from app.models.user import User
from app.api.routes.dashboard import router as dashboard_router
from app.api.routes.vehicle import router as vehicle_router
from app.api.routes.purchase import router as purchase_router
app = FastAPI(
    title="AutoVerse API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://auto-verse-7r7ya752c-mihir-patels-projects-aefe17c5.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

app.include_router(health_router)
app.include_router(auth_router)
app.include_router(vehicle_router)
app.include_router(purchase_router)
app.include_router(dashboard_router)

@app.get("/")
def root():
    return {
        "message": "Welcome to AutoVerse API ",
        "version": "1.0.0",
    }