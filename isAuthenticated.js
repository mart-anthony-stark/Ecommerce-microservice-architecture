const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    jwt.verify(token, "SADFAD354", (err, decoded) => {
      if (err) return res.json(err);

      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = isAuthenticated;
