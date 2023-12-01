const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({

    seasonid: { type: String, require: true },

    leagueid: { type: String, require: true },

	teamname : { type: String, require: true },

	getData : [{

    NO_OF_GAMES: { type: String, require: true },

    POINTS: { type: String, require: true },

    POINTS_ACCUMULATED: { type: String, require: true },

    POINTS_GAINING_RATE: { type: String, require: true },

	GS_inG: { type: String, require: true },

	GS_cum: { type: String, require: true },

    GS_rate: { type: String, require: true },

    GC_inG: { type: String, require: true },

    GC_cum: { type: String, require: true },

    GC_rate: { type: String, require: true },

    GS_GC: { type: String, require: true },

    Poverty_Line: { type: String, require: true },
	}],

    status: { type: String, enum: ["active", "inactive"], default: "active" }
},
    { timestamps: true }

)


module.exports = mongoose.model("teamdata", teamSchema)