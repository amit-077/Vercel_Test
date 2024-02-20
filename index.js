const express = require("express");
const mongoose = require("mongoose");
const { User } = require("./models/User");
const app = express();

const connectDB = async () => {
  let data = await mongoose.connect(
    "mongodb+srv://ami_t918:RV9M8boFNG9CU2ik@cluster0.fywpj0h.mongodb.net/?retryWrites=true&w=majority"
  );

  if (data) {
    console.log("Database connected");
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("Working ");
});

app.get("/getAllUsers", async (req, res) => {
  let data = await User.find();
  res.send(data);
});

app.listen(5000, () => {
  console.log("Server running");
});
