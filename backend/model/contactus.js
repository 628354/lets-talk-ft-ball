const mongoose = require("mongoose");
const validator = require("validator");

const contactusSchema = mongoose.Schema(
  {
    logo: { type: String, require: true },
    image: { type: String, require: true },
    name: { type: String, require: true },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
        isAsync: false,
      },
    },
    subject: { type: String, require: true },
    message: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("contactus", contactusSchema);
