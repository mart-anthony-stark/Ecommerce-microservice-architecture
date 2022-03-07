const Order = require("../models/order.model");

module.exports = {
  getAllorders: async (req, res) => {
    const orders = await Order.find();
    res.send(orders);
  },
};
