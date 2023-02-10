const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT || 8000,
  mongooseUrl:
    process.env.MONGO_URL || "mongodb://localhost:27017/mern-authentication",
  jwtSecret: {
    access: process.env.ACCESS_TOKEN_SECRET,
    refresh: process.env.REFRESH_TOKEN_SECRET,
  },
};
