const Product = require("../models/Product.model");

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
};
