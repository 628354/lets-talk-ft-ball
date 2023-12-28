const mongoose = require("mongoose");

const cafeSchema = mongoose.Schema(
  {
    details: { type: String, require: true },
    logo: { type: String, require: true },
    en: {
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

module.exports = mongoose.model("cafe", cafeSchema);
