const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Minimum length of the name is 2"],
      maxlength: [30, "Maximum length of the name is 9"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required"],
      minlength: [4, "Minimum length of Password is 4"],
     
    },
    role: {
      type: String,
      enum: {
        values: ["user","manager", "admin"],
        message: `{VALUE} is not valid role`,
      },
      default: "user",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
