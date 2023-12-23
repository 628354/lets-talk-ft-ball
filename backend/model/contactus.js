const mongoose = require("mongoose");
const validator = require("validator");

const contactusSchema = mongoose.Schema(
  {
    logo: { type: String, default: "" },
    image: { type: String, default: "" },
    name: { type: String, default: "" },
    email: {
      type: String,
      validate: {
        validator: validator.isEmail,
        message: "{VALUE} is not a valid email",
        isAsync: false,
      },
    },
    subject: { type: String, default: "" },
    message: { type: String, default: "" },
  },
  { timestamps: true }
);

const contactus = mongoose.model('contactus', contactusSchema)
module.exports = contactus