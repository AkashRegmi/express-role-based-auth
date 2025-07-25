📘 Role-Based Authentication Web App
A full-stack MERN (MongoDB, Express, React, Node.js) project with secure authentication and role-based access. Users can log in as Admin, Manager, or User. Each role is routed to their specific dashboard.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🔐 Features
✅ Secure JWT Authentication

✅ Role-based Protected Routes

✅ Hashing Password

✅ HTTP-only cookies for security

✅ Auto-redirect based on role after login

✅ Tailwind CSS UI

✅ Persistent auth state on page refresh
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🚀 Tech Stack
Frontend: React + Vite + Tailwind CSS

Backend: Node.js + Express + MongoDB

Authentication: JWT + HTTP-Only Cookies

Role-Based Routing

CORS-secured API communication
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🍪 Cookie-Based JWT
Stored as HTTP-only cookie named token

Lifetime: 1 hour (maxAge: 3600000)

Secure in production

sameSite: Lax
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧑‍💻 Run the Project Locally
🔧 Backend Setup
1. Clone backend:
git clone <your-backend-repo>
cd backend
npm install
npm run dev

2. Create a .env file with:
PORT=9000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🌐 Frontend Setup
1. Clone frontend:
git clone <your-frontend-repo>
cd frontend
npm install
npm run dev

2. Update axiosInstance.js if backend runs on a different port:
baseURL: "http://localhost:9000/api",
withCredentials: true

📄 License
This project is for educational/demo purposes by Akash Regmi.
Feel free to customize and use it in your own applications.