const z = require("zod");

const login = {
  body: z.object({
    userName: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .min(5, "Username minimum 5 characters")
      .max(20, "Username maximum 20 characters"),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, "Password minimum 6 characters"),
  }),
};

const signup = {
  body: z.object({
    name: z.string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email({ message: "Invalid email" }),
    userName: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string",
      })
      .regex(/^\S*$/, "Space not allow")
      .min(5, "Username minimum 5 characters")
      .max(20, "Username maximum 20 characters"),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(6, "Password minimum 6 characters"),
    role: z.enum(["user", "admin"]),
  }),
};

module.exports = {
  login,
  signup,
};
