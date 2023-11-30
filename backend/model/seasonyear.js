const mongoose = require("mongoose");

const seasonSchema = mongoose.Schema(
  {
    season_Title: { type: String, require: true },
    // startDate: { type: Date, require: true },
    // endDate: { type: Date, require: true },
    // matches: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'FootballMatch',
    //   },
    // ]
    sort_Order: { type: String, require: true },

    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("season", seasonSchema);
