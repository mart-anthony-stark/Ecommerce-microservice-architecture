const Order = require("../models/order.model");
const { channel } = require("../utils/createConn");

module.exports = {
  getAllOrders: async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  },
  createOrder: async (products, userEmail) => {
    const total = products.reduce((t, item) => {
      return (t += item.price);
    }, 0);

    const newOrder = new Order({
      products,
      user: userEmail,
      total_price: total,
    });
    await newOrder.save();
    return newOrder;
  },
};
