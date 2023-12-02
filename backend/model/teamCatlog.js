const mongoose = require("mongoose");

const teamCatlogSchema = mongoose.Schema(
    {
        Team_info: { type: String, require: true },
        Team_Name_English: { type: String, require: true },
        Team_Name_Arabic: { type: String, require: true },
        Team_Name_Short_English: { type: String, require: true },
        Team_Name_Short_Arabic: { type: String, require: true },
        Description_English: { type: String, require: true },
        Description_Arabic: { type: String, require: true },
        Image: { type: String, require: true },
        SEO_URL: { type: String, require: true },
        Past_teams_logo_file_names_below: { type: String, require: true },
        logo_folder: { type: String, require: true },
        status: { type: String, enum: ["active", "inactive"], default: "active" },
    },
    { timestamps: true }
);

module.exports = mongoose.model("teamCatlog", teamCatlogSchema);
