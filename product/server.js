const express = require("express");
const init = require("./utils/init");
const amqp = require("amqplib");
require("dotenv").config({});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let channel, connection;

app.use("/products", require("./routes/product.route"));

async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = amqp.connect(amqpServer);
  channel = await (await connection).createChannel();
  await channel.assertQueue("PRODUCT");
}

// connect();

init(app);
