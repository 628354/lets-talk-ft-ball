const mongoose = require("mongoose");

const cafeSchema = mongoose.Schema(
  {
    en: {
      logo: { type: String, require: true },
      details: { type: String, require: true },
      league_name: { type: String, require: true },
      cafecontent: [
        {
          title: { type: String, require: true },
          cafe_image: { type: String, require: true },
          date: { type: Date, require: true },
          content: { type: String, require: true },
        },
      ]

    },
    ar: {
      logo: { type: String, require: true },
      details: { type: String, require: true },
      league_name: { type: String, require: true },
      cafecontent: [
        {
          title: { type: String, require: true },
          cafe_image: { type: String, require: true },
          date: { type: Date, require: true },
          content: { type: String, require: true },
        },
      ]
    }
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("caafe", cafeSchema);
