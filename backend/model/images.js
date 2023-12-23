const mongoose = require("mongoose")


const imagesSchema = mongoose.Schema({
    logo: { type: String },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    folderName: { type: String, default: "" }
}, {
    timestamps: true
})


module.exports = mongoose.model("image", imagesSchema)