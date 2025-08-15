const jwt = require("jsonwebtoken");
const User = require("./models/....");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  // mohammed5212/module-4
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // attach user id+role to request
    req.user = { id: payload.id, role: payload.role };
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
module.exports = auth;
