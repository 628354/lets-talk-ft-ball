const mongoose = require("mongoose");

const teamCatlogSchema = mongoose.Schema(
    {
        Team_info: { type: String, require: true },
        leagueid: { type: mongoose.Schema.Types.ObjectId, ref: 'league' },
        seasonid: { type: String, require: true },
        en:{
        Team_Name_English: { type: String, require: true, default:"" },
        Team_Name_Short_English: { type: String, require: true, default:"" },
        Description_English: { type: String, require: true, default:"" }
        },
        ar:{
        Team_Name_Arabic: { type: String, require: true, default:"" },
        Team_Name_Short_Arabic: { type: String, require: true, default:"" },
        Description_Arabic: { type: String, require: true, default:"" }
        },
        Image: { type: String, require: true, default:"" },
        SEO_URL: { type: String, require: true , default:""},
        Past_teams_logo_file_names_below: { type: String, require: true, default:"" },
        logo_folder: { type: String, require: true, default:"" },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("teamCatlog", teamCatlogSchema);
