const mongoose = require("mongoose");

const teamCatlogSchema = mongoose.Schema(
    {
        leagueid: { type: mongoose.Schema.Types.ObjectId, ref: 'league' },
        Image: { type: String, default: "" },
        en: {
            Team_Name_English: { type: String, default: "" },
            Team_Name_Short_English: { type: String, default: "" },
            Description_English: { type: String, default: "" },
            Team_info: { type: String, default: "" },
            SEO_URL: { type: String, default: "" },
            Past_teams_logo_file_names_below: { type: String, default: "" },
            logo_folder: { type: String, default: "" },
            status: { type: String, enum: ["enable", "disable"], default: "enable" }
        },
        ar: {
            Team_Name_Arabic: { type: String, default: "" },
            Team_Name_Short_Arabic: { type: String, default: "" },
            Description_Arabic: { type: String, default: "" },
            Team_info: { type: String, default: "" },
            SEO_URL: { type: String, default: "" },
            Past_teams_logo_file_names_below: { type: String, default: "" },
            logo_folder: { type: String, default: "" },
            status: { type: String, enum: ["enable", "disable"], default: "enable" }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("teamCatlog", teamCatlogSchema);
