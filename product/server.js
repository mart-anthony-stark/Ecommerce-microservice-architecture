const express = require("express");
const init = require("./utils/init");
const amqp = require("amqplib");
require("dotenv").config({});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/products", require("./routes/product.route"));

init(app);
