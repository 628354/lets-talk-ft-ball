const mongoose = require("mongoose");

const leaguedataSchema = mongoose.Schema(
  {
    seasonid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "season"
    },
    leagueid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "league",
    },
    datatype: { type: String, require: true },

    en: [{
      teamname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teamCatlog"
      },
      games: { type: String, require: true },

      win: { type: String, require: true },

      draw: { type: String, require: true },

      lose: { type: String, require: true },

      goals_scored: { type: String, require: true },

      goals_conceded: { type: String, require: true },

      points: { type: String, require: true },

      point_gap: { type: String, require: true },

      gs_gc: { type: String, require: true },

      win_precent: { type: String, require: true },

      GS_G: { type: String, require: true },

      win_precents: { type: String, require: true },

      Points_Stdev: { type: String, require: true },

    }],
    ar: [{
      teamname: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teamCatlog"
      },

      games: { type: String, require: true },

      win: { type: String, require: true },

      draw: { type: String, require: true },

      lose: { type: String, require: true },

      goals_scored: { type: String, require: true },

      goals_conceded: { type: String, require: true },

      points: { type: String, require: true },

      point_gap: { type: String, require: true },

      gs_gc: { type: String, require: true },

      win_precent: { type: String, require: true },

      GS_G: { type: String, require: true },

      win_precents: { type: String, require: true },

      Points_Stdev: { type: String, require: true },
    }],



  }, {
  timestamps: true
})

module.exports = mongoose.model("leaguedata", leaguedataSchema);
