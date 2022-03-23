const express = require("express");
const { json } = require("express/lib/response");
const mongoose = require("mongoose");
const userRouter = require("./source/routes/userRoute");

const app = express();
app.use(express.json());
app.use(userRouter);

app.listen(3000, () => {
  console.log("port listen at 3000");
});

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.irlro.mongodb.net/db?retryWrites=true&w=majority",
  () => {
    console.log("DB connected");
  }
);
