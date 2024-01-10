const mongoose = require("mongoose");

const cafeSchema = mongoose.Schema(
  {
    logo: { type: String, require: true },
    cafe_image: { type: String, require: true },
    en: {
      details: { type: String, require: true },
      title: { type: String, require: true },
      date: { type: Date, require: true },
      content: { type: String, require: true },
    },
    ar: {
      details: { type: String, require: true },
      title: { type: String, require: true },
      date: { type: Date, require: true },
      content: { type: String, require: true },
    }
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cafe", cafeSchema);
