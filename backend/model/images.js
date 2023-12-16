const mongoose = require("mongoose")
const imagesSchema = mongoose.Schema({
    folderName: { type: String, default: "" },
    logo: { type: String, require: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" }
}, {
    timestamps: true
})
module.exports = mongoose.model("image", imagesSchema)