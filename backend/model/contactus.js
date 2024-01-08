const mongoose = require("mongoose");
const validator = require("validator");

const contactusSchema = mongoose.Schema(
  {
    logo: { type: String },
    image: { type: String },
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
    contact_textarea: { type: String }
  },
  { timestamps: true }
);

const contactus = mongoose.model('contactus', contactusSchema)
module.exports = contactus