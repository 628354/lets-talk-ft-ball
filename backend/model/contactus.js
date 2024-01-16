const mongoose = require("mongoose");
const validator = require("validator");

const contactusSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
    bannerImage: { type: String, default: "" },
    contactusImage: { type: String, default: "" },
    en: {
      contact_textarea: { type: String, default: "" },
    },
    ar: {
      contact_textarea: { type: String, default: "" }
    }

  },
  { timestamps: true }
);

const contactus = mongoose.model('contactus', contactusSchema)
module.exports = contactus