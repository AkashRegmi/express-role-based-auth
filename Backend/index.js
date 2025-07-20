const express = require("express");
const cors = require("cors");
const env = require("dotenv");
env.config();
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const connectDB = require("./config/connectdatabase");
const errorHandler = require("./Middleware/errorHandler");
const authRoute = require("./Route/authroute");
const PORT = process.env.PORT || 9000;
const app = express();

connectDB();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true,
}));

//Routes
app.use("/api/auth", authRoute);

//Using the Global ErrorHandler
app.use(errorHandler);

//App is running
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
