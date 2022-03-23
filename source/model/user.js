const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please enter an Email"],
      unique: [true],
      lowercase: true,
      validate: [isEmail, "Please Enter valid Email"],
    },
    password: {
      type: String,
      required: [true, "Please enter an password"],
      minlength: [6, "Minimum password length is 6 characters"],
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const solt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, solt);

  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;
