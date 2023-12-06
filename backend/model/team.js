const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    teamName: { type: String, default: "" },

    games: { type: String, default: "" },

    image: { type: String, default: "" },

    graph_Title1: { type: String, default: "" },

    graph_Title2: { type: String, default: "" },

    graph_Title3: { type: String, default: "" },

    graph_Title4: { type: String, default: "" },

    description: { type: String, default: "" },

    meta_Tag_Description: { type: String, default: "" },

    meta_Tag_Keywords: { type: String, default: "" },

    team_Tags: { type: String, default: "" },

    leagues: { type: mongoose.Schema.Types.ObjectId, ref: "league" },

    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("team", teamSchema);
