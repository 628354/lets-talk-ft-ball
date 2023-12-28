const mongoose = require("mongoose");
const validator = require("validator");

const contactusSchema = mongoose.Schema(
  {
    en: {
      logo: { type: String, default: "" },
      image: { type: String, default: "" },
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      subject: { type: String, default: "" },
      message: { type: String, default: "" },
    },
    ar: {
      logo: { type: String, default: "" },
      image: { type: String, default: "" },
      name: { type: String, default: "" },
      email: { type: String, default: "" },
      subject: { type: String, default: "" },
      message: { type: String, default: "" },
    }

  },
  { timestamps: true }
);

const contactus = mongoose.model('contactus', contactusSchema)
module.exports = contactus