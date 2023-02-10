const bcrypt = require("bcryptjs");
const { model, Schema } = require("mongoose");

// schema
const authSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    userName: {
      type: String,
      trim: true,
      unique: true,
      minlength: [5, "Username must be of minimum 6 characters"],
      maxlength: [20, "Username must be of  maximum 20 characters"],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      email: true,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "user"],
      default: "user",
    },
    active: {
      type: Boolean,
      default: true,
    },
    refreshToken: [String],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// hashed password
authSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(this.password, salt);

    this.password = hashed;
  }
  next();
});

//compare password
authSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//is userName exist
authSchema.statics.isUserNameExist = async function (userName, excludeAuthId) {
  const auth = await this.findOne({ userName, _id: { $ne: excludeAuthId } });
  return !!auth;
};

module.exports = model("auth", authSchema);
