# Openagentv2 — Project TODO

## Tech Stack

- **Frontend:** React.js (with DaisyUI UI library & Zustand for state management)
- **Backend/API:** Node.js (Express)
- **Database:** PostgreSQL
- **DevOps:** Docker (containerized app)
- **Enhancement:** Domain Property Data API integration

---

## Task Sequence

### 1. Project Setup & Scaffolding
- [x] Scaffold React.js frontend (Create React App, Vite, etc.)
- [x] Scaffold Node.js backend (Express)
- [x] Install/configure Tailwind CSS & DaisyUI in React.js
- [ ] Install Zustand
- [x] Configure Docker (Dockerfile, Compose)
- [x] Set up SQLite or PostgreSQL database

### 2. Backend API Development
- [x] Initial Node.js/Express setup:
- [ ] Implement REST API endpoints in Node.js/Express:
    - POST /contacts (create)
    - GET /contacts (list)
    - PUT /contacts/:id (mark verified)
    - DELETE /contacts/:id (delete)
- [ ] Add server-side validation
- [ ] Connect APIs to database schema/models

### 3. Frontend Core Features (with DaisyUI)
- [ ] Build Contact Us page:
    - [ ] Display company details
    - [ ] Build DaisyUI form (First/Last Name, Email, Phone, Additional Info)
    - [ ] Form validation (Zustand for state)
    - [ ] Submit to API, show DaisyUI Thank You message
- [ ] Build Contacts List page:
    - [ ] Fetch contacts from backend API
    - [ ] Display DaisyUI-styled list
    - [ ] DaisyUI buttons for "Mark as Verified"/"Delete" with Zustand state
    - [ ] Feedback/status indicators
- [ ] Add DaisyUI navbar, header, footer

### 4. Domain API Property Data Integration (Enhancement)
- [ ] Integrate Domain API in React.js frontend
- [ ] Display property data via DaisyUI cards/lists
- [ ] Secure API keys in env variables

### 5. Responsive Design & Theming
- [ ] Ensure responsiveness with DaisyUI utility classes
- [ ] Test across mobile, tablet, desktop
- [ ] Theme switching & mobile polish

### 6. Testing & Quality Assurance
- [ ] Unit tests for core components
- [ ] Unit tests for API endpoints
- [ ] Manual user flow checks

### 7. Dockerization & Deployment
- [ ] Final Docker setup for frontend and backend
- [ ] Test local dev and Compose
- [ ] Document local/deployment steps

### 8. Documentation & Submission
- [ ] Update README with full tech stack and setup instructions
- [ ] Document DaisyUI/Zustand/Domain API usage
- [ ] Host on GitHub for submission

---
