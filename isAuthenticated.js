const jwt = require("jsonwebtoken");

export async function isAuthenticated(req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  jwt.verify(token, "SADFAD354", (err, decoded) => {
    if (err) return res.json(err);

    req.user = decoded;
    next();
  });
}
