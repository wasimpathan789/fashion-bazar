const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config("");
// const userRoutes = require("./routes/authRoutes");
const { error } = require("console");

const app = express();

// middlware
app.use(express.json());
app.use(cors());

// db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to DB");
  })
  .catch((error) => console.log("error", error));

// app listen
app.listen(6969, () => {
  console.log("started");
});

console.log("server");
