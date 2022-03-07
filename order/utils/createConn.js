const amqp = require("amqplib");
const { createOrder } = require("../controller/order.controller");

let channel, connection;
async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = amqp.connect(amqpServer);
  channel = await (await connection).createChannel();
  await channel.assertQueue("PRODUCT");
}
connect().then(() => {
  channel.consume("ORDER", (data) => {
    const { products, email } = JSON.parse(data.content);

    console.log("Consuming ORDER queue");
    const newOrder = createOrder(products, email);
    channel.ack(data);
    channel.sendToQueue("PRODUCT", Buffer.from(JSON.stringify({ newOrder })));
  });
});

module.exports = channel;
