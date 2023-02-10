const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const isAuth = (role) => (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized!" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, jwtSecret.access);

    req.user = decoded;

    if (role === "allowAll") next();

    if (role !== decoded.role) {
      req.user = undefined;

      return res
        .status(403)
        .json({ message: "You are not authorized to view this page" });
    }

    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid token!" });
  }
};

module.exports = isAuth;
