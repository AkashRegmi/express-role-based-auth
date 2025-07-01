const jwt = require('jsonwebtoken');

// Auth Middleware: checks if token exists and is valid
const isAuthenticated = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRETEKEY);
    req.user = decoded; // contains { userId, role, nmae }
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};
// Manager Middleware
const isManager = (req, res, next) => {
  if (!req.user || (req.user.role !== 'manager' && req.user.role !== 'admin')) {
    return res.status(403).json({ message: 'Forbidden: Manager and Admin only' });
  }
  next();
};
// Admin Middleware: checks if user is admin
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Forbidden: Admins only' });
  }
  next();
};

module.exports = {
  isAuthenticated,
  isManager,
  isAdmin
};
