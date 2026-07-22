from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.database.dependencies import get_db
from app.schemas.auth import LoginRequest, RegisterRequest, TokenResponse
from app.services.auth_service import AuthService

router = APIRouter(
    prefix="/api/auth",
    tags=["Authentication"],
)


@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(
    payload: RegisterRequest,
    db: Session = Depends(get_db),
):
    try:
        user = AuthService.register(db, payload)

        return {
            "message": "User registered successfully",
            "user": {
                "id": user.id,
                "email": user.email,
                "full_name": user.full_name,
            },
        }

    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )


@router.post(
    "/login",
    response_model=TokenResponse,
)
def login(
    payload: LoginRequest,
    db: Session = Depends(get_db),
):
    try:
        return AuthService.login(db, payload)

    except ValueError as e:
        raise HTTPException(
            status_code=401,
            detail=str(e),
        )