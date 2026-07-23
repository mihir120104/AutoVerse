# AutoVerse – Vehicle Inventory Management System

<div align="center">

![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-38BDF8?logo=tailwindcss)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange)

**A modern full-stack Vehicle Inventory Management System built using FastAPI, React, SQLite and Tailwind CSS.**

</div>

---

# 📌 Project Overview

AutoVerse is a full-stack dealership inventory management platform designed to streamline vehicle inventory operations for automobile dealerships.

The application enables administrators to manage vehicles, monitor inventory, process purchases, analyze sales, and visualize dealership statistics through an intuitive dashboard.

The project follows a clean layered architecture using Repository Pattern, Service Layer, REST APIs, and reusable React components.

---

# ✨ Key Features

## 🔐 Authentication

- User Registration
- Secure Login
- JWT Authentication
- Protected Routes
- Role-based Access (Admin/User)

---

## 🚙 Vehicle Inventory

- Add Vehicle
- Update Vehicle
- Delete Vehicle
- Search Vehicles
- Filter by Category
- Filter by Fuel Type
- Filter by Transmission
- Sort Vehicles
- Responsive Inventory Cards
- Stock Management

---

## 🛒 Purchase Module

- Purchase Vehicle
- Automatic Stock Reduction
- Purchase History
- Out-of-stock Protection
- Purchase Dialog

---

## 📊 Dashboard

Real-time dealership overview including:

- Total Vehicles
- Total Purchases
- Total Revenue
- Low Stock Vehicles
- Recent Purchases
- Inventory Summary

---

## 📈 Analytics

- Revenue Analytics
- Vehicle Category Distribution
- Purchase Statistics
- Dashboard Charts
- Business Insights

---

## ⚙️ Settings

- User Profile
- Account Information
- Logout

---

# 🏗️ Project Architecture

```
AutoVerse
│
├── backend
│   ├── api
│   ├── auth
│   ├── database
│   ├── models
│   ├── repositories
│   ├── schemas
│   ├── services
│   └── main.py
│
├── frontend
│   ├── components
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── utils
│   └── App.jsx
│
└── README.md
```

---

# 🛠️ Tech Stack

## Backend

- FastAPI
- SQLAlchemy ORM
- SQLite
- Pydantic
- JWT Authentication
- Passlib
- Uvicorn

---

## Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- Recharts
- Lucide React
- shadcn/ui

---

## Database

- SQLite

---

# 🚀 Major Functionalities

## Vehicle Management

✔ Add Vehicle

✔ Edit Vehicle

✔ Delete Vehicle

✔ Purchase Vehicle

✔ Search Vehicle

✔ Restock Vehicle

✔ Inventory Management

---

## Dashboard

✔ Statistics Cards

✔ Revenue

✔ Purchase Summary

✔ Low Stock Alert

✔ Analytics

---

## Authentication

✔ Register

✔ Login

✔ JWT Token

✔ Protected Routes

✔ Logout

---

# 📱 Responsive Design

The application is fully responsive across:

- Desktop
- Laptop
- Tablet
- Mobile

Responsive improvements include:

- Mobile Navigation Drawer
- Responsive Dashboard Cards
- Mobile Inventory Cards
- Mobile Purchase Cards
- Adaptive Layout

---

# 📂 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

---

## Vehicles

```
GET     /api/vehicles
GET     /api/vehicles/{id}
GET     /api/vehicles/search

POST    /api/vehicles
PUT     /api/vehicles/{id}
DELETE  /api/vehicles/{id}

POST    /api/vehicles/{id}/purchase
POST    /api/vehicles/{id}/restock
```

---

## Purchases

```
GET  /api/purchases
POST /api/purchases
```

---

## Dashboard

```
GET /api/dashboard
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/mihir120104/AutoVerse

cd autoverse
```

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend:

```
http://127.0.0.1:8000
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend:

```
http://localhost:5173
```

---

# 📷 Screenshots

Add screenshots here before submission.

```
screenshots/

├── login.png

├── dashboard.png

├── inventory.png

├── purchases.png

├── analytics.png

├── settings.png

└── mobile.png
```

---

# 🧪 Testing

The application has been manually tested for:

- Authentication
- CRUD Operations
- Purchase Flow
- Dashboard Statistics
- Analytics
- Search
- Restock
- Responsive UI

---

# 🤖 AI Usage Disclosure

Generative AI tools were used during development for:

- Code review
- Debugging assistance
- UI improvement suggestions
- Architecture discussions
- Documentation drafting

All generated code was reviewed, modified, tested, and integrated manually before being included in the project.

---

# 🚧 Challenges Faced

- Designing scalable backend architecture
- Managing vehicle stock consistency
- Responsive dashboard implementation
- Integrating frontend with REST APIs
- Handling purchase transactions
- JWT authentication flow
- Mobile responsive tables

---

# 🔮 Future Improvements

- Cloud Database (PostgreSQL)
- Docker Deployment
- Email Notifications
- Vehicle Image Upload
- Sales Reports (PDF)
- Customer Management
- Multi-role Authorization
- Advanced Analytics
- Dark / Light Theme
- Export Inventory to Excel

---

# 👨‍💻 Developer

**Mihir Patel**

Software Engineering (M.Eng.)

LD College of Engineering

GitHub: https://github.com/mihir120104

LinkedIn: https://www.linkedin.com/in/mihir-patel-138ab7260/

Portfolio: https://mihirspatel.vercel.app/

---

<div align="center">

## ⭐ Thank You

**AutoVerse – Modern Vehicle Inventory Management System**

Built using FastAPI, React and Tailwind CSS.

</div>