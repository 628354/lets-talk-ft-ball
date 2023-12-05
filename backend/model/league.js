const mongoose = require("mongoose");

const leagueSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user"},
    leaguedataId: { type: mongoose.Schema.Types.ObjectId, ref: 'leaguedata' },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'team' },
    sessionId: { type: mongoose.Schema.Types.ObjectId, ref: 'season' },
    leaguename: { type: String ,default:""},
    image: { type: String, default:"" },
    description: { type: String, default:"" },
    meta_Tag_Title: { type: String, default:"" },
    meta_Tag_Description: { type: String, default:"" },
    meta_Tag_Keywords: { type: String, default:"" },
    blog_Category: { type: String, default:"" },
    sort_Order: { type: String , default:""},
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("league", leagueSchema);
