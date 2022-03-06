const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(express.json());

app.use("/auth", require("./routes/auth.route"));

app.listen(PORT, async () => {
  await mongoose.connect(process.env.DB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Auth service started running on port ${PORT}`);
});
