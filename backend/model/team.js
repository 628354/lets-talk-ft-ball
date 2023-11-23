const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({

    teamName: { type: String, require: true },

    short_name: { type: String, require: true },

    image: { type: String, require: true },

    graph_Title1: { type: String, require: true },

    graph_Title2: { type: String, require: true },

    graph_Title3: { type: String, require: true },

    graph_Title4: { type: String, require: true },

    description: { type: String, require: true },

    meta_Tag_Description: { type: String, require: true },

    meta_Tag_Keywords: { type: String, require: true },

    team_Tags: { type: String, require: true },

    leagues: { type: mongoose.Schema.Types.ObjectId, ref: "league" },

    status: { type: String, enum: ["active", "inactive"], default: "active" }
},
    { timestamps: true }

)


module.exports = mongoose.model("team", teamSchema)