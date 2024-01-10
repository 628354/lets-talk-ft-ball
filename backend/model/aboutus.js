const mongoose = require("mongoose");
const aboutusSchema = mongoose.Schema(
  {

    en: {
      aboutTitle: { type: String, default: "" },
      aboutText: { type: String, default: "" },
      visionTitle: { type: String, default: "" },
      visionText: { type: String, default: "" },
      missionTitle: { type: String, default: "" },
      missionText: { type: String, default: "" }
    },
    ar: {
      aboutTitle: { type: String, default: "" },
      aboutText: { type: String, default: "" },
      visionTitle: { type: String, default: "" },
      visionText: { type: String, default: "" },
      missionTitle: { type: String, default: "" },
      missionText: { type: String, default: "" }
    },
    bannerImage: { type: String, default: "" },
    aboutSectionImage: { type: String, default: "" },
    visionSectionImage: { type: String, default: "" },

  },
  { timestamps: true }
);

const aboutus = mongoose.model('aboutus', aboutusSchema)
module.exports = aboutus