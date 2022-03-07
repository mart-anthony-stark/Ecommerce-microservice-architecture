const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    products: [
      {
        product_id: String,
      },
    ],
    user: String,
    total_price: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
