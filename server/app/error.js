const { Error } = require("mongoose");
const { logEvents } = require("../middleware/logEvents");

const notFoundError = (_req, _res, next) => {
  const error = new Error("Resource not found!");
  error.status = 404;

  next(error);
};

const globalError = (error, _req, res, _next) => {
  logEvents(`${error.name}: ${error.message}`, "errorLogs.txt");

  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }

  //mongoose validation error handler
  if (error) {
    const errors = Object.values(error.errors).map((el) => el.message);

    if (errors.length > 1) {
      return res.status(400).json({ message: errors.join(", ") });
    }

    return res.status(400).json({ message: errors[0] });
  }

  //mongoose duplicate error handler
  if (error.code && error.code === 11000) {
    const field = Object.keys(error.keyValue || {});

    return res.status(409).json({ message: `${field} already exists` });
  }

  res
    .status(500)
    .json({ message: `(Internal server error): ${error.message}` });
};

module.exports = { notFoundError, globalError };
