# OpenAgent v2

A full-stack web application for managing contact inquiries with a responsive client interface and RESTful API backend. Built with React, Express.js, PostgreSQL, and Docker.

## 🌐 Live Demo

**🚀 [View Live Website](https://openagentv2-production.up.railway.app/)**

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running with Docker](#running-with-docker)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Assumptions](#assumptions)

## 🎯 Project Overview

This application provides a complete contact management solution with:
- **Contact Us Page**: Company information and contact form for inquiries
- **Contacts List Page**: Administrative view to manage and verify contacts
- **RESTful API**: Backend endpoints for CRUD operations
- **Responsive Design**: Mobile-first approach with Tailwind CSS and DaisyUI
- **Dockerized**: Fully containerized for easy deployment

#### API Endpoints
- `POST /api/contacts` - Create new contact
- `GET /api/contacts` - List all contacts
- `PUT /api/contacts/:id` - Update contact (mark verified or edit)
- `DELETE /api/contacts/:id` - Delete contact

#### Features
- **Request Validation**: Comprehensive validation using express-validator
- **Error Handling**: Centralized error handling with meaningful messages
- **CORS**: Configured for cross-origin requests
- **PostgreSQL Database**: Production-ready relational database
- **Connection Pooling**: Efficient database connection management

## 🛠 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Zustand** - State management
- **Axios** - HTTP client
- **Tailwind CSS v4** - Utility-first CSS
- **DaisyUI** - Component library

### Backend
- **Node.js 22** - Runtime environment
- **Express.js** - Web framework
- **PostgreSQL** - Database
- **pg** - PostgreSQL client
- **express-validator** - Request validation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Frontend production server
- **Railway** - Cloud deployment platform

## 📦 Prerequisites

Before running this application, ensure you have:

- **Node.js** >= 22.12.0 ([Download](https://nodejs.org/))
- **npm** >= 10.x
- **Docker** >= 20.x ([Download](https://www.docker.com/))
- **Docker Compose** >= 2.x
- **PostgreSQL** >= 14.x (if running without Docker)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Johnnsonkp/openagentv2.git
cd openagentv2
```

### 2. Install Dependencies

```bash
# Install all dependencies (frontend and backend)
npm run install:all

# Or install separately
cd frontend && npm install
cd ../backend && npm install
```

### 3. Set Up Environment Variables

#### Backend (.env in `/backend` directory)

Create a `.env` file in the `backend` directory:

```env
PORT=5001
DATABASE_URL=postgresql://user:password@localhost:5432/contacts_db
NODE_ENV=development
```

#### Frontend (.env in `/frontend` directory)

Create a `.env` file in the `frontend` directory:

```env
VITE_API_BASE=/api
```

### 4. Set Up PostgreSQL Database

#### Option A: Using Docker (Recommended)

PostgreSQL will be set up automatically with Docker Compose (see next section).

#### Option B: Local PostgreSQL Installation

```bash
# Create database
createdb contacts_db

# Run schema
psql contacts_db < backend/src/db/schema.sql
```

The schema creates a `contacts` table with:
- `id` (SERIAL PRIMARY KEY)
- `first_name` (VARCHAR)
- `last_name` (VARCHAR)
- `email` (VARCHAR, UNIQUE)
- `phone` (VARCHAR)
- `additional_info` (TEXT)
- `verified` (BOOLEAN, default FALSE)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

### 5. Run the Application

#### Development Mode (Without Docker)

```bash
# Terminal 1: Start backend
cd backend
npm run dev

# Terminal 2: Start frontend
cd frontend
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5001

## 🐳 Running with Docker

### Using Docker Compose (Recommended)

This is the easiest way to run the entire application stack:

```bash
# Build and start all services
docker-compose up --build

# Or run in detached mode
docker-compose up -d --build
```

This will start:
- **Frontend**: http://localhost:3000
- **Backend**: http://localhost:5001
- **PostgreSQL**: localhost:5432

To stop the services:

```bash
docker-compose down

# To remove volumes as well (clears database)
docker-compose down -v
```

### Running Individual Services

#### Backend Only

```bash
docker build -t openagent-backend ./backend
docker run -p 5001:5001 \
  -e DATABASE_URL=postgresql://user:password@host/db \
  openagent-backend
```
 
#### Frontend Only

```bash
docker build -t openagent-frontend \
  --build-arg VITE_API_BASE=http://localhost:5001/api \
  ./frontend
docker run -p 3000:3000 openagent-frontend
```


## 📁 Project Structure

```
openagentv2/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Table/       # Contact list table
│   │   │   ├── Tab/         # Search tabs
│   │   │   └── ui/          # UI components (Nav, Footer, etc.)
│   │   ├── pages/           # Page components
│   │   │   ├── Home/        # Landing page
│   │   │   ├── About/       # About page
│   │   │   ├── Contact/     # Contact form page
│   │   │   └── Contacts/    # Contacts list page
│   │   ├── store/           # Zustand state management
│   │   ├── lib/             # API client configuration
│   │   ├── types/           # TypeScript type definitions
│   │   └── App.tsx          # Main app component
│   ├── Dockerfile           # Frontend Docker configuration
│   ├── nginx.conf           # Nginx configuration
│   ├── package.json
│   └── vite.config.js       # Vite configuration
│
├── backend/                 # Express backend application
│   ├── src/
│   │   ├── db/              # Database configuration
│   │   │   ├── connect.js   # PostgreSQL connection
│   │   │   └── schema.sql   # Database schema
│   │   ├── routes/
│   │   │   └── api.js       # API route handlers
│   │   └── index.js         # Express app entry point
│   ├── Dockerfile           # Backend Docker configuration
│   └── package.json
│
├── docker-compose.yml       # Docker Compose configuration
├── package.json             # Root package.json (scripts)
└── README.md                # This file
```

## 🚢 Deployment
- Client and server deployed on railway app
- Database deployed on railway app



## 🔍 Assumptions
1. **Database**: PostgreSQL is used for both development and production due to prior experience with it.
2. **UI**: The UI is modeled on the official OpenAgent website with minor personalizations to the landing page.
3. **State management**: Zustand is used as a lightweight, decoupled state layer so the app can be easily switched to Redux or another library if needed.
4. **State management**: API requests and related state are centralised in Zustand stores/hooks, keeping data-fetching logic together, minimizing component re-renders, and exposing clear actions/selectors for predictable updates.
5. **Contact form**: The contact form and contact page follow the structure and behavior of the official OpenAgent site.
6. **Validations**: Form validations are performed on the client, and all incoming data is validated again on the server.
7. **Type safety**: The frontend is implemented in TypeScript. If the backend were restarted, TypeScript would be considered there as well; some data-type issues were encountered during initial development.
8. **Domain API**: Integration with a domain/property API (to power real property search) was planned but postponed due to time constraints — this may be added in a future update.
9. **Mobile support**: Responsive layouts were implemented (assisted by Copilot) and manually tested across common breakpoints.

## 🧪 Testing

### Manual Testing

1. **Contact Form Submission**:
   - Fill out form with valid data → Should show thank you page
   - Try invalid email → Should show validation error
   - Try duplicate email → Should show error message

2. **Contacts List**:
   - View contacts → Should display all contacts
   - Mark as verified → Should update status and disable button
   - Delete contact → Should show confirmation and remove from list
   - Edit contact → Should open modal and update on save

3. **Responsive Design**:
   - Test on mobile (320px - 768px)
   - Test on tablet (768px - 1024px)
   - Test on desktop (1024px+)

## 👤 Author

**Johnnsonkp**
- GitHub: [@Johnnsonkp](https://github.com/Johnnsonkp)


