const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
// require("dotenv/config");
// const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

//middleware
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authJwt());
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(errorHandler);

const MONGO = "mongodb://127.0.0.1:27017/fashionBazar";
// const MONGO = process.env.DB_URL;
// const API_URL = "http://localhost:3030/api";
// const api = process.env.API_URL;

const api = "http://localhost:3030/api";

const PORT = 3030;

//Routes
const categoriesRoutes = require("./routes/categoriesRoutes");
const productsRoutes = require("./routes/productsRoute");
const usersRoutes = require("./routes/usersRoutes");
const ordersRoutes = require("./routes/ordersRoutes");

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

// db connection
mongoose
  .connect(MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log("Db not Connected"));

// Server
app.listen(PORT, () => {
  console.log("server is listening");
});
