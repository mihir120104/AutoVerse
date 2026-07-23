from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.database.base import Base
from app.database.session import engine

from app.api.routes.health import router as health_router
from app.api.routes.auth import router as auth_router
from app.api.routes.vehicle import router as vehicle_router
from app.api.routes.purchase import router as purchase_router
from app.api.routes.dashboard import router as dashboard_router

# Import models so SQLAlchemy creates all tables
from app.models.user import User
from app.models.vehicle import Vehicle
from app.models.purchase import Purchase

app = FastAPI(
    title="AutoVerse API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        # Local Development
        "http://localhost:5173",
        "http://127.0.0.1:5173",

        # Vercel Production Domain
        "https://auto-verse-sigma.vercel.app",

        # Current Vercel Deployment
        "https://auto-verse-f139q69mj-mihir-patels-projects-aefe17c5.vercel.app",
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
        "message": "Welcome to AutoVerse API",
        "version": "1.0.0",
    }