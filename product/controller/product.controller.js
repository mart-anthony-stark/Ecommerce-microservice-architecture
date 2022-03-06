const Product = require("../models/Product.model");

module.exports = {
  getAllProduct: async (req, res) => {
    const products = await Product.find();
    res.send(products);
  },
  createProduct: async (req, res) => {
    res.send("create");
  },
};
