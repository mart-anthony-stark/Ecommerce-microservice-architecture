const User = require("../models/User.model");

class AuthController {
  async register(req, res) {
    const { email, password, name } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists)
      return res.status(409).send({ error: "User already exists" });

    const newUser = new User({
      name,
      email,
      password,
    });
    
    await newUser.save();
    res.json(newUser);
  }
}

module.exports = AuthController;
