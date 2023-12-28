const mongoose = require("mongoose");

const seasonSchema = mongoose.Schema(
  {
    season_Title: { type: String, require: true },
    sort_Order: { type: String, required: true, default: "" },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("season", seasonSchema);
