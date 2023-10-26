const mongoose = require("mongoose")


const leagueSchema = mongoose.Schema({

    leaguename: { type: String, require: true },

    image: { type: String, require: true },

    status: { type: String, enum: ["active", "inactive"], default: "active" }

},
    { timestamps: true }
)

module.exports = mongoose.model("league", leagueSchema)

