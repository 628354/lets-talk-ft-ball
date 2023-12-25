const mongoose = require("mongoose");
const aboutusSchema = mongoose.Schema(
  {
    bannerImage: { type: String, default: "" },
    aboutTitle: { type: String, default: "" },
    aboutText: { type: String, default: "" },
    aboutSectionImage: { type: String, default: "" },
    visionSectionImage: { type: String, default: "" },
    visionTitle: { type: String, default: "" },
  },
  { timestamps: true }
);

const aboutus = mongoose.model('aboutus', aboutusSchema)
module.exports = aboutus