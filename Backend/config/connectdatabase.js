const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODBURL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Database is Connected");
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDB;
