const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    leaguename: { type: String, require: true },
    image: { type: String, require: true },
    description: { type: String, require: true },
    meta_Tag_Title: { type: String, require: true },
    meta_Tag_Description: { type: String, require: true },
    meta_Tag_Keywords: { type: String, require: true },
    blog_Category: { type: String },
    sort_Order: { type: String, require: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("league", leagueSchema);
