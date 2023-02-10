const { ZodError } = require("zod");
const errorMessage = require("../utils/errorMessage");

const validate = (schema) => async (req, _res, next) => {
  try {
    if (schema.params) {
      req.params = await schema.params.parseAsync(req.params);
    }

    if (schema.body) {
      req.body = await schema.body.parseAsync(req.body);
    }

    if (schema.query) {
      req.query = await schema.query.parseAsync(req.query);
    }

    next();
  } catch (error) {
    if (error instanceof ZodError) {
      const message = error.issues.map((details) => details.message).join(", ");

      return next(errorMessage(message, 409));
    }

    next(error);
  }
};

module.exports = validate;
