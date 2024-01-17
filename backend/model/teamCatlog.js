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
            status: { type: String, enum: ["enable", "disabled"], default: "enable" },
            Graph_Title1: { type: String, default: "" },
            Graph_Title2: { type: String, default: "" },
            Graph_Title3: { type: String, default: "" },
            Graph_Title4: { type: String, default: "" }
        },
        ar: {
            Team_Name_Arabic: { type: String, default: "" },
            Team_Name_Short_Arabic: { type: String, default: "" },
            Description_Arabic: { type: String, default: "" },
            Team_info: { type: String, default: "" },
            SEO_URL: { type: String, default: "" },
            Past_teams_logo_file_names_below: { type: String, default: "" },
            logo_folder: { type: String, default: "" },
            status: { type: String, enum: ["enable", "disabled"], default: "enable" },
            Graph_Title1: { type: String, default: "" },
            Graph_Title2: { type: String, default: "" },
            Graph_Title3: { type: String, default: "" },
            Graph_Title4: { type: String, default: "" }
        },
        is_Deleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("teamCatlog", teamCatlogSchema);
