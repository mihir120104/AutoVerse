# PROMPTS.md

# AutoVerse – AI Development Prompt Log

## Developer

**Mihir Patel**

## Project

**AutoVerse – Full Stack Vehicle Inventory Management System**

Technology Stack

- FastAPI
- React.js
- Tailwind CSS
- SQLAlchemy
- SQLite
- JWT Authentication
- Axios
- Recharts
- Vite

---

# Overview

This document records the prompts used during the development of the AutoVerse project.

Generative AI was used as an engineering assistant for:

- Project Planning
- Software Architecture
- Backend Development
- Authentication
- Database Design
- API Design
- Frontend Development
- Responsive UI
- Debugging
- Documentation

Every AI-generated suggestion was manually reviewed, modified, tested, and integrated into the final application.

---

# PHASE 1 — Project Planning & Architecture

## Prompt 01

### Objective
Plan the complete architecture of the AutoVerse application.

### Prompt
> Design a scalable full-stack Vehicle Inventory Management System using FastAPI, React, SQLAlchemy, JWT Authentication, and Tailwind CSS. Follow Repository Pattern and Service Layer Architecture.

### AI Contribution
- Suggested layered architecture
- Repository Pattern
- Service Layer
- Modular folder structure

### Manual Changes
Customized folders, APIs, and modules according to assignment requirements.

### Outcome
Established the overall project architecture.

---

## Prompt 02

### Objective
Create a scalable backend folder structure.

### Prompt
> Suggest an enterprise-grade FastAPI project structure that separates routes, repositories, services, models, schemas, authentication, and database configuration.

### AI Contribution
Recommended modular FastAPI structure.

### Manual Changes
Adjusted folders to match the AutoVerse project.

### Outcome
Created a maintainable backend architecture.

---

## Prompt 03

### Objective
Design the frontend architecture.

### Prompt
> Design a React project structure using reusable components, layouts, routes, pages, services, and utilities.

### AI Contribution
Generated a modular React architecture.

### Manual Changes
Added dashboard, inventory, analytics, purchases, authentication, and settings pages.

### Outcome
Improved maintainability and scalability.

---

## Prompt 04

### Objective
Select the technology stack.

### Prompt
> Recommend the best technology stack for building a modern full-stack inventory management system.

### AI Contribution
Suggested FastAPI, React, Tailwind CSS, SQLAlchemy, JWT Authentication, SQLite, Axios, and Recharts.

### Manual Changes
Selected technologies based on assignment constraints.

### Outcome
Defined the final technology stack.

---

## Prompt 05

### Objective
Design the database.

### Prompt
> Design normalized database models for Users, Vehicles, and Purchases.

### AI Contribution
Suggested database entities, fields, and relationships.

### Manual Changes
Modified schemas based on inventory requirements.

### Outcome
Created SQLAlchemy models.

---

## Prompt 06

### Objective
Create authentication.

### Prompt
> Implement secure JWT Authentication using FastAPI.

### AI Contribution
Generated JWT workflow and token creation logic.

### Manual Changes
Integrated authentication with project APIs.

### Outcome
Login authentication implemented.

---

## Prompt 07

### Objective
Register users securely.

### Prompt
> Create a Register API using password hashing and SQLAlchemy.

### AI Contribution
Suggested password hashing with Passlib.

### Manual Changes
Integrated hashing with the User repository.

### Outcome
Secure registration completed.

---

## Prompt 08

### Objective
Create Login API.

### Prompt
> Build a Login API returning JWT access tokens after credential verification.

### AI Contribution
Generated authentication workflow.

### Manual Changes
Added role handling and frontend integration.

### Outcome
Login functionality completed.

---

## Prompt 09

### Objective
Protect application routes.

### Prompt
> Protect frontend routes using JWT authentication and React Router.

### AI Contribution
Suggested ProtectedRoute implementation.

### Manual Changes
Integrated with AutoVerse routing.

### Outcome
Protected dashboard pages.

---

## Prompt 10

### Objective
Role-based UI.

### Prompt
> Implement role-based rendering so Admin users can edit and delete vehicles while normal users cannot.

### AI Contribution
Suggested role-based utility methods.

### Manual Changes
Connected frontend to authentication response.

### Outcome
Admin-only actions implemented.

---

# PHASE 2 — Vehicle Inventory Backend

## Prompt 11

### Objective
Build Vehicle CRUD.

### Prompt
> Generate complete CRUD APIs for Vehicle Management using FastAPI.

### AI Contribution
Generated Create, Read, Update and Delete endpoints.

### Manual Changes
Refactored into repository and service layers.

### Outcome
Vehicle CRUD completed.

---

## Prompt 12

### Objective
Repository Pattern.

### Prompt
> Implement Repository Pattern for Vehicle operations.

### AI Contribution
Generated repository methods.

### Manual Changes
Optimized queries and naming conventions.

### Outcome
Repository layer completed.

---

## Prompt 13

### Objective
Service Layer.

### Prompt
> Implement business logic for Vehicle operations inside the Service Layer.

### AI Contribution
Generated validation logic.

### Manual Changes
Added custom validations.

### Outcome
Business logic separated from API routes.

---

## Prompt 14

### Objective
Vehicle validation.

### Prompt
> Validate Vehicle input using Pydantic schemas.

### AI Contribution
Generated request and response schemas.

### Manual Changes
Added additional validation rules.

### Outcome
Robust API validation.

---

## Prompt 15

### Objective
Search API.

### Prompt
> Implement Vehicle Search API supporting make, model, category, minimum price, and maximum price.

### AI Contribution
Generated search logic.

### Manual Changes
Integrated repository queries.

### Outcome
Vehicle search completed.

---

## Prompt 16

### Objective
Purchase API.

### Prompt
> Create Purchase API that automatically decreases stock quantity.

### AI Contribution
Generated purchase workflow.

### Manual Changes
Integrated with inventory management.

### Outcome
Purchase feature completed.

---

## Prompt 17

### Objective
Inventory validation.

### Prompt
> Prevent vehicle purchases when stock reaches zero.

### AI Contribution
Generated validation logic.

### Manual Changes
Added frontend button disabling.

### Outcome
Out-of-stock protection implemented.

---

## Prompt 18

### Objective
Restock API.

### Prompt
> Create a Vehicle Restock API that increases inventory quantity.

### AI Contribution
Generated inventory update logic.

### Manual Changes
Added validation for positive quantities.

### Outcome
Restock functionality completed.

---

## Prompt 19

### Objective
Dashboard statistics.

### Prompt
> Generate backend APIs for Dashboard statistics including total vehicles, purchases, revenue, and low-stock alerts.

### AI Contribution
Generated aggregation logic.

### Manual Changes
Customized calculations.

### Outcome
Dashboard API completed.

---

## Prompt 20

### Objective
Improve backend quality.

### Prompt
> Review the complete backend architecture and suggest improvements following SOLID principles and clean coding practices.

### AI Contribution
Suggested refactoring opportunities and cleaner organization.

### Manual Changes
Applied improvements where appropriate.

### Outcome
Backend became more modular and maintainable.

---

# End of Part 1

# PHASE 3 — Frontend Development

## Prompt 21

### Objective
Build the complete React frontend for AutoVerse.

### Prompt
> Design a modern React application for a Vehicle Inventory Management System using reusable components, React Router, Tailwind CSS, and Axios. Follow clean architecture and maintain scalability.

### AI Contribution
- Suggested frontend architecture
- Recommended folder structure
- Component organization
- Routing strategy

### Manual Changes
Customized the structure according to project requirements.

### Outcome
Frontend architecture finalized.

---

## Prompt 22

### Objective
Create the Login Page.

### Prompt
> Design a professional login page using Tailwind CSS with modern UI, responsive layout, JWT integration, loading state, and validation.

### AI Contribution

- Login UI
- Form validation
- Loading state
- Authentication flow

### Manual Changes

Integrated Login API and navigation.

### Outcome

Professional authentication page completed.

---

## Prompt 23

### Objective

Design Dashboard Layout.

### Prompt

> Create an admin dashboard layout containing Sidebar, Navbar and Outlet using React Router.

### AI Contribution

- Dashboard layout
- Sidebar
- Navbar
- Responsive layout

### Manual Changes

Customized navigation according to project.

### Outcome

Dashboard layout completed.

---

## Prompt 24

### Objective

Build Inventory Page.

### Prompt

> Create a responsive Vehicle Inventory page supporting search, filter, sorting and CRUD operations.

### AI Contribution

- Inventory page
- Search
- Filter
- Sort
- Responsive layout

### Manual Changes

Integrated backend APIs.

### Outcome

Inventory module completed.

---

## Prompt 25

### Objective

Create reusable Vehicle Table.

### Prompt

> Design a reusable VehicleTable component supporting desktop table and responsive mobile cards.

### AI Contribution

Generated responsive component structure.

### Manual Changes

Customized cards and admin actions.

### Outcome

Responsive inventory completed.

---

## Prompt 26

### Objective

Implement Add Vehicle Dialog.

### Prompt

> Build an Add Vehicle dialog using shadcn/ui Dialog component and reusable form components.

### AI Contribution

Generated modal implementation.

### Manual Changes

Connected backend API.

### Outcome

Vehicle creation completed.

---

## Prompt 27

### Objective

Implement Edit Vehicle Dialog.

### Prompt

> Create an Edit Vehicle dialog with pre-filled values and update functionality.

### AI Contribution

Generated update workflow.

### Manual Changes

Connected Update API.

### Outcome

Vehicle editing completed.

---

## Prompt 28

### Objective

Delete Vehicle.

### Prompt

> Implement Delete confirmation dialog with proper validation and refresh inventory after deletion.

### AI Contribution

Generated delete confirmation flow.

### Manual Changes

Customized confirmation and refresh logic.

### Outcome

Vehicle deletion completed.

---

## Prompt 29

### Objective

Purchase Dialog.

### Prompt

> Design Purchase Dialog supporting quantity selection, stock validation and purchase confirmation.

### AI Contribution

Generated dialog structure.

### Manual Changes

Integrated Purchase API.

### Outcome

Purchase workflow completed.

---

## Prompt 30

### Objective

Purchase History.

### Prompt

> Build Purchase History page displaying purchased vehicles, quantity and purchase date.

### AI Contribution

Generated Purchase table.

### Manual Changes

Linked purchases with vehicle information.

### Outcome

Purchase History completed.

---

# PHASE 4 — Dashboard & Analytics

## Prompt 31

### Objective

Dashboard Cards.

### Prompt

> Design professional dashboard cards displaying Total Vehicles, Purchases, Revenue and Low Stock.

### AI Contribution

Generated KPI cards.

### Manual Changes

Connected Dashboard API.

### Outcome

Dashboard statistics completed.

---

## Prompt 32

### Objective

Revenue Analytics.

### Prompt

> Create Revenue Analytics using Recharts with responsive charts.

### AI Contribution

Generated Bar Chart.

### Manual Changes

Customized colors and labels.

### Outcome

Revenue visualization completed.

---

## Prompt 33

### Objective

Category Distribution.

### Prompt

> Generate Pie Chart showing Vehicle Categories.

### AI Contribution

Suggested chart configuration.

### Manual Changes

Connected inventory data.

### Outcome

Category analytics completed.

---

## Prompt 34

### Objective

Low Stock Component.

### Prompt

> Build Low Stock widget highlighting vehicles requiring restocking.

### AI Contribution

Generated component structure.

### Manual Changes

Applied business rules.

### Outcome

Inventory monitoring improved.

---

## Prompt 35

### Objective

Recent Purchases.

### Prompt

> Create Recent Purchases component displaying latest purchase transactions.

### AI Contribution

Generated reusable component.

### Manual Changes

Integrated Purchase APIs.

### Outcome

Dashboard became more informative.

---

## Prompt 36

### Objective

Quick Actions.

### Prompt

> Design Quick Action cards for Inventory, Purchases, Analytics and Settings.

### AI Contribution

Suggested dashboard shortcuts.

### Manual Changes

Connected routing.

### Outcome

Navigation improved.

---

# PHASE 5 — Responsive Design

## Prompt 37

### Objective

Responsive Dashboard.

### Prompt

> Make Dashboard fully responsive for desktop, tablet and mobile.

### AI Contribution

Suggested responsive grids.

### Manual Changes

Adjusted layouts.

### Outcome

Dashboard responsive.

---

## Prompt 38

### Objective

Responsive Inventory.

### Prompt

> Replace desktop tables with responsive cards on mobile devices.

### AI Contribution

Generated mobile card layout.

### Manual Changes

Customized action buttons.

### Outcome

Inventory mobile experience improved.

---

## Prompt 39

### Objective

Responsive Navbar.

### Prompt

> Create responsive Navbar with hamburger menu, notifications and mobile navigation.

### AI Contribution

Suggested responsive navbar.

### Manual Changes

Integrated sidebar toggle.

### Outcome

Navigation improved.

---

## Prompt 40

### Objective

Responsive Sidebar.

### Prompt

> Implement collapsible Sidebar supporting desktop and mobile navigation.

### AI Contribution

Generated responsive sidebar logic.

### Manual Changes

Added navigation links and animations.

### Outcome

Application became fully responsive.

---

# End of Part 2

# PHASE 6 — Debugging & Issue Resolution

## Prompt 41

### Objective
Fix API integration issues between FastAPI and React.

### Prompt
> Review the communication between the FastAPI backend and React frontend. Identify why API requests are failing and suggest a clean, scalable solution.

### AI Contribution
- Reviewed API endpoints
- Identified incorrect request handling
- Suggested consistent API service layer

### Manual Changes
Updated Axios service configuration and corrected endpoint usage.

### Outcome
Stable communication between frontend and backend.

---

## Prompt 42

### Objective
Resolve purchase workflow errors.

### Prompt
> Debug the Purchase module where stock updates correctly but the frontend does not refresh automatically after a successful purchase.

### AI Contribution
- Suggested callback-based refresh
- Identified state synchronization issue

### Manual Changes
Connected the purchase callback to refresh inventory and purchase history.

### Outcome
Purchase workflow synchronized successfully.

---

## Prompt 43

### Objective
Fix component import issues.

### Prompt
> Review React imports and identify duplicate or incorrect component imports causing compilation errors.

### AI Contribution
- Located duplicate imports
- Suggested correct import organization

### Manual Changes
Removed duplicate imports and reorganized component files.

### Outcome
Application compiled successfully.

---

## Prompt 44

### Objective
Improve role-based UI.

### Prompt
> Ensure Edit and Delete actions are only visible to administrators while Purchase remains available according to project requirements.

### AI Contribution
- Suggested conditional rendering
- Recommended utility functions

### Manual Changes
Integrated role checking with frontend utilities.

### Outcome
Role-based interface completed.

---

## Prompt 45

### Objective
Fix responsive navigation.

### Prompt
> Debug the responsive sidebar and navbar so they work correctly on mobile devices.

### AI Contribution
- Suggested mobile sidebar implementation
- Recommended responsive navigation structure

### Manual Changes
Connected menu toggle with dashboard layout.

### Outcome
Responsive navigation completed.

---

## Prompt 46

### Objective
Improve dashboard responsiveness.

### Prompt
> Review Dashboard cards, spacing, typography and layout to improve usability across different screen sizes.

### AI Contribution
- Suggested responsive grid system
- Recommended adaptive spacing

### Manual Changes
Adjusted layouts using Tailwind responsive utilities.

### Outcome
Dashboard optimized for desktop, tablet and mobile.

---

## Prompt 47

### Objective
Improve Inventory responsiveness.

### Prompt
> Convert desktop tables into mobile-friendly cards while maintaining the same information hierarchy.

### AI Contribution
- Generated responsive card design
- Suggested mobile layout improvements

### Manual Changes
Customized mobile cards for inventory.

### Outcome
Inventory page became mobile-friendly.

---

## Prompt 48

### Objective
Improve Purchase History.

### Prompt
> Redesign Purchase History to display vehicle details instead of only vehicle IDs and improve readability.

### AI Contribution
- Suggested mapping purchases with vehicle data
- Recommended date formatting

### Manual Changes
Connected purchase data with vehicle information.

### Outcome
Purchase History became more informative.

---

## Prompt 49

### Objective
Review dashboard analytics.

### Prompt
> Evaluate dashboard widgets and recommend improvements for business insights.

### AI Contribution
- Suggested KPI cards
- Recommended analytics widgets

### Manual Changes
Integrated charts and dashboard components.

### Outcome
Dashboard provides clearer business insights.

---

## Prompt 50

### Objective
Review overall UI consistency.

### Prompt
> Review the complete application and suggest improvements for colors, spacing, typography, buttons and reusable UI components.

### AI Contribution
- Suggested consistent design language
- Recommended reusable components

### Manual Changes
Applied styling improvements across the application.

### Outcome
Improved UI consistency.

---

# PHASE 7 — Testing & Validation

## Prompt 51

### Objective
Validate backend APIs.

### Prompt
> Generate testing scenarios for Vehicle CRUD, Purchases, Dashboard APIs and Authentication.

### AI Contribution
- Suggested API test cases
- Recommended validation scenarios

### Manual Changes
Executed manual testing and verified API responses.

### Outcome
Backend functionality validated.

---

## Prompt 52

### Objective
Validate authentication flow.

### Prompt
> Review Login and Registration workflow and identify edge cases.

### AI Contribution
- Suggested authentication scenarios
- Recommended validation improvements

### Manual Changes
Verified login, invalid credentials and protected routes.

### Outcome
Authentication workflow validated.

---

## Prompt 53

### Objective
Review Purchase validation.

### Prompt
> Suggest edge cases for Purchase functionality including stock validation and invalid quantities.

### AI Contribution
- Suggested validation scenarios
- Recommended stock protection

### Manual Changes
Verified purchase restrictions.

### Outcome
Purchase validation improved.

---

## Prompt 54

### Objective
Improve code quality.

### Prompt
> Review the complete project using Clean Code principles and identify opportunities for refactoring.

### AI Contribution
- Suggested reusable components
- Recommended separation of concerns

### Manual Changes
Refactored duplicated logic.

### Outcome
Improved maintainability.

---

# PHASE 8 — Documentation

## Prompt 55

### Objective
Prepare README documentation.

### Prompt
> Write a professional README.md for a FastAPI and React full-stack project including architecture, installation, APIs, screenshots and future scope.

### AI Contribution
Generated comprehensive README structure.

### Manual Changes
Updated project-specific information.

### Outcome
Professional documentation completed.

---

## Prompt 56

### Objective
Document APIs.

### Prompt
> Create organized API endpoint documentation grouped by Authentication, Vehicles, Purchases and Dashboard.

### AI Contribution
Generated API documentation.

### Manual Changes
Verified endpoints with implementation.

### Outcome
API documentation completed.

---

## Prompt 57

### Objective
Prepare AI usage documentation.

### Prompt
> Document AI-assisted development process and organize prompts according to the software development lifecycle.

### AI Contribution
Suggested structured documentation format.

### Manual Changes
Organized prompts according to actual development phases.

### Outcome
PROMPTS.md prepared.

---

# PHASE 9 — Git & Deployment

## Prompt 58

### Objective
Prepare Git repository.

### Prompt
> Review project structure before committing to GitHub and identify unnecessary files.

### AI Contribution
- Reviewed repository structure
- Identified accidental root Node.js files
- Suggested cleanup

### Manual Changes
Removed unnecessary files and organized the repository.

### Outcome
Repository prepared for submission.

---

## Prompt 59

### Objective
Deployment guidance.

### Prompt
> Explain how to deploy the React frontend and FastAPI backend for public access.

### AI Contribution
Suggested deployment workflow using modern hosting platforms.

### Manual Changes
Prepared deployment configuration.

### Outcome
Project ready for deployment.

---

# PHASE 10 — Final Review

## Prompt 60

### Objective
Conduct a complete project review.

### Prompt
> Review the complete AutoVerse project as a senior software engineer. Evaluate architecture, code quality, responsiveness, scalability, documentation and readiness for submission. Identify remaining improvements.

### AI Contribution
- Reviewed architecture
- Evaluated code organization
- Suggested final improvements
- Reviewed documentation
- Reviewed responsiveness

### Manual Changes
Implemented the recommended improvements before submission.

### Outcome
Final project prepared for academic submission.

---

# AI Contribution Summary

Artificial Intelligence assisted throughout the project lifecycle by providing guidance for:

- Project planning
- Software architecture
- Backend implementation
- Authentication
- Database design
- CRUD APIs
- Purchase workflow
- Dashboard development
- Analytics
- Responsive design
- Debugging
- Code review
- Documentation
- Git workflow
- Deployment guidance

All generated content was manually reviewed, modified, tested, and integrated by the developer before being included in the final project.

---

# Developer Declaration

**Developer:** Mihir Patel

I used Generative AI as a software development assistant during the implementation of this project. AI was primarily used to accelerate learning, explore implementation approaches, review code, assist with debugging and improve documentation.

Every code change, architectural decision and final implementation was manually reviewed, tested and integrated by me before submission.