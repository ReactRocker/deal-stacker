const { model, Schema } = require("mongoose");
const validator = require("validator");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "User must have a name!"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    strategies: {
      type: [Schema.Types.ObjectId],
    },
  },
  { collection: "users" }
);

module.exports = UserSchema;
