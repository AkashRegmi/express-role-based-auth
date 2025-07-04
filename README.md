# express-role-based-auth
🔐 Role-Based Authentication API with Express.js & JWT (with Cookies)
A secure, role-based authentication backend built using Node.js, Express.js, MongoDB, and JWT, where tokens are stored in HTTP-only cookies. It supports user, manager, and admin roles with protected routes for each.
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
📌 Features
✅ User Registration & Login

✅ Password hashing using bcrypt.js

✅ JWT-based authentication via HTTP-only cookies

✅ Role-based access control (RBAC)

✅ Separate Dashboards for:

user

manager (also includes access for admin)

admin only

✅ Global error handler

✅ Secure cookie settings
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🛠️ Tech Stack
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Auth & Security: JWT, bcrypt.js, cookie-parser

Environment Config: dotenv
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🍪 Cookie-Based JWT
Stored as HTTP-only cookie named token

Lifetime: 1 hour (maxAge: 3600000)

Secure in production

sameSite: Strict
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
⚙️ Installation & Setup
1. Clone the repo
git clone https://github.com/your-username/role-auth-api.git
cd role-auth-api

2. Install dependencies
npm install

3. Create .env file
PORT=9000
MONGO_URI=your_mongodb_connection_string
SECRETEKEY=your_jwt_secret_key
NODE_ENV=development

4. Run the server
npm start
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
🧪 API Endpoints
Auth Routes (Prefix: /api/auth)
Method	Route	Access	Description
POST	/signup	Public	Register new user
POST	/signin	Public	Login and receive JWT
POST	/logout	Authenticated	Logout and clear token
GET	/userdashboard	Logged in User	Access user dashboard
GET	/managerdashboard	Manager/Admin	Access manager dashboard
GET	/admindashboard	Admin Only	Access admin dashboard
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------❗ Error Handling
All errors are handled using a global middleware. Invalid routes and authentication/authorization failures return appropriate HTTP status codes and messages.
