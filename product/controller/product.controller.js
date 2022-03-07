const Product = require("../models/Product.model");
const { channel } = require("../utils/createConn");

module.exports = {
  getAllProduct: async (req, res) => {
    const products = await Product.find();
    res.send(products);
  },
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.send(newProduct);
  },
  buyProduct: async (req, res) => {
    const { ids } = req.body;
    const products = await Product.find({ _id: { $in: ids } }); // If one of the ids array

    channel.sendToQueue(
      "ORDER",
      Buffer.from(JSON.stringify({ products, userEmail: req.user.email }))
    );
    res.send(products);
  },
};
