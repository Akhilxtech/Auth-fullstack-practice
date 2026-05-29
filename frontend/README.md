# AuthFlow Console

A full-stack authentication system with JWT-based login, registration, and token refresh — deployed with custom domains.

🌐 **Live:** [auth.akhilt.tech](https://auth.akhilt.tech)
🔌 **API:** [api.akhilt.tech](https://api.akhilt.tech)

---

## Tech Stack

**Frontend**
- React + Vite
- Axios with request/response interceptors
- Deployed on Netlify

**Backend**
- Node.js + Express
- JWT (access + refresh token)
- bcryptjs for password hashing
- better-sqlite3
- Deployed on Render

---

## Features

- User registration and login
- JWT access token + refresh token flow
- Automatic token refresh via Axios interceptor
- Protected routes
- CORS configured for production

---

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── api/          # Axios instance + interceptors
│   │   ├── components/
│   │   └── pages/
│   └── .env
│
└── backend/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── db.js
    └── server.js
```

---

## Local Setup

**Backend**
```bash
cd backend
pnpm install
cp .env.example .env   # fill in your values
pnpm dev
```

**Frontend**
```bash
cd frontend
pnpm install
cp .env.example .env   # set VITE_API_URL=http://localhost:3000
pnpm dev
```

**Environment Variables**

Backend `.env`:
```
PORT=3000
JWT_SECRET=your_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
```

Frontend `.env`:
```
VITE_API_URL=https://api.akhilt.tech
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login, returns tokens |
| POST | `/api/auth/refresh` | Get new access token |
| POST | `/api/auth/logout` | Logout user |
| GET | `/api/auth/me` | Get current user (protected) |

---

## Deployment

| Service | Platform | Domain |
|---------|----------|--------|
| Frontend | Netlify | auth.akhilt.tech |
| Backend | Render | api.akhilt.tech |

DNS managed via Netlify — CNAME records pointing to respective platforms.