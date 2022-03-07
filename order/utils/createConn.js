async function connect() {
  const amqpServer = "amqp://localhost:5672";
  connection = amqp.connect(amqpServer);
  module.exports.channel = await (await connection).createChannel();
  await channel.assertQueue("PRODUCT");
}
connect();
