from sqlalchemy.orm import Session

from app.auth.hashing import hash_password, verify_password
from app.auth.jwt import create_access_token
from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import LoginRequest, RegisterRequest


class AuthService:

    @staticmethod
    def register(db: Session, payload: RegisterRequest):
        existing_user = UserRepository.get_by_email(db, payload.email)

        if existing_user:
            raise ValueError("Email already registered")

        user = User(
            full_name=payload.full_name,
            email=payload.email,
            password_hash=hash_password(payload.password),
            is_admin=False,
        )

        return UserRepository.create(db, user)

    @staticmethod
    def login(db: Session, payload: LoginRequest):
        user = UserRepository.get_by_email(db, payload.email)

        if not user:
            raise ValueError("Invalid credentials")

        if not verify_password(
            payload.password,
            user.password_hash,
        ):
            raise ValueError("Invalid credentials")

        token = create_access_token(
            {
                "sub": user.email,
                "user_id": user.id,
                "is_admin": user.is_admin,
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
        }