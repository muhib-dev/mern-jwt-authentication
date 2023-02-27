const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const { requestLogger } = require("../middleware/logEvents");

const limiterOptions = {
  windowMs: 60 * 60 * 1000, // 60 minutes
  max: 1000, // Limit each IP to 1000 requests per `window`
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: "Too many request from this IP. Please try again after an hour",
};

const middleware = [
  requestLogger, // logger custom middleware
  rateLimit(limiterOptions), // requist limiter
  helmet(), // set security HTTP headers
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
    optionsSuccessStatus: 200,
  }),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true }),
  mongoSanitize(), // sanitize request data
];

module.exports = middleware;
