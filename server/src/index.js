const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const API_URL = "http://localhost:3030/api";
const DB_URL = "mongodb://127.0.0.1:27017/fashionBazar";
const PORT = 3030;

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("tiny"));

// Routes
const productsRoutes = require("./routes/productsRoute");
const categoriesRoutes = require("./routes/categoriesRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(productsRoutes);
app.use(categoriesRoutes);
// app.use(ordersRoutes);
// app.use(usersRoutes);

// app.use(`${API_URL}/products`, productsRoutes);

// app.use(`${API_URL}/categories`, categoriesRoutes);
// app.use(`${API_URL}/orders`, ordersRoutes);
// app.use(`${API_URL}/users`, usersRoutes);

// db connection

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log("Db not Connected"));

app.listen(PORT, () => {
  console.log("server is listening");
});

// app.get(PORT, (req, res) => {
//   res.send("http://localhost:3030/api");
// });
