const mongoose = require('mongoose')
const folderSchema = new mongoose.Schema({
    folderName: { type: String, default: "" },
    status: { type: String, enum: ["active", "enactive"], default: "active" }
}, { timestamps: true })
const folder = mongoose.model("folder", folderSchema)
module.exports = folder
