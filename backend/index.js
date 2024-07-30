require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require('./routes/auth-router')
const productRouter = require('./routes/product-router')
require('./db/db')

const PORT = process.env.PORT || 5001;

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use(bodyParser.json());
app.use(cors());

app.use('/auth',authRouter)
app.use('/products',productRouter)


app.listen(PORT, () => {
  console.log("Server is running on ", PORT);
});
