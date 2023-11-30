const mongoose = require("mongoose");

const leaguedataSchema = mongoose.Schema(
  {
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "team",
    },

    league: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "league",
    },

    seasonid: { type: String, required: true },

    leagueid: { type: String, required: true },

    datatype: { type: String, required: true },

    getData: [
      {
        teamname: { type: String, required: true },

        games: { type: String, required: true },

        win: { type: String, required: true },

        draw: { type: String, required: true },

        lose: { type: String, required: true },

        goals_scored: { type: String, required: true },

        goals_conceded: { type: String, required: true },

        points: { type: String, required: true },

        point_gap: { type: String, required: true },

        gs_gc: { type: String, required: true },

        win_precent: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("leaguedata", leaguedataSchema);
