const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const {
  Signup,
  Signin,
  Logout,
  userDashboard,
  adminDashboard,
  managerDashboard,
} = require("../Controller/authcontroller");
const {
  isAuthenticated,
  isAdmin,
  isManager,
} = require("../Middleware/authMiddleware");

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/logout", Logout);
//Verified user can access it
router.get("/userdashboard", isAuthenticated, userDashboard);
//only admin and manager can Access this
router.get("/managerdashboard", isAuthenticated, isManager, managerDashboard);
//only admin can Access this
router.get("/admindashboard", isAuthenticated, isAdmin, adminDashboard);
module.exports = router;
