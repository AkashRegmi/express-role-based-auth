const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const User = require("../Database/User");

//Controller for the signup
const Signup = async (req, res) => {
  const { name, email, role, password } = req.body;
  const Existingemail = await User.findOne({ email });
  if (Existingemail) {
    return res.status(400).json({
      status: "fail",
      message: `${email} already existed.Please Sign in `,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name,
    email,
    role,
    password: hashedPassword,
  });
  await newUser.save();

  const token = jwt.sign(
    { userId: newUser._id, role: newUser.role, name: newUser.name },
    process.env.SECRETEKEY,
    { expiresIn: "1h" }
  );
  console.log(`The Token is ${token}`);
  res.cookie("token", token, {
    httponly: true,
    maxAge: 3600000,
  });
  res.status(200).json({
    status: "Success",
    message: newUser,
  });
};
const Signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        status: "fail",
        message: `${email} email is not found. PLease SignUP`,
      });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(400).json({
        status: "fail",
        message: "Invalid credintial",
      });
    }
    const token = jwt.sign(
      { userId: user._id, role: user.role, name: user.name },
      process.env.SECRETEKEY,
      { expiresIn: "1h" }
    );

    // 4. Set token in HTTP-only cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // only true in production
      sameSite: "Strict",
      maxAge: 3600000, // 1 hour
    });
    res.status(200).json({
      status: "Success",
      message: "Login Successfull",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: `${error.message}`,
    });
  }
};
const Logout = async (req, res) => {
  res.clearCookie("token", {
    httponly: true,
  });
  res.status(200).json({
    message: "Logout Successfully",
  });
};
// Controller to return dashboard info for any logged-in user
const userDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome ${req.user.name}!`,
    userId: req.user.userId,
  });
};
//manager Dashboard
const managerDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome ${req.user.name}!`,
    userId: req.user.userId,
  });
};
// Admin Dashboard Controller
const adminDashboard = (req, res) => {
  res.status(200).json({
    message: `Welcome to the Admin Panel, ${req.user.name}`,
    userId: req.user.userId,
  });
};

module.exports = {
  Signup,
  Signin,
  Logout,
  userDashboard,
  adminDashboard,
  managerDashboard,
};
