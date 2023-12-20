const mongoose = require("mongoose")


const imagesSchema = mongoose.Schema({
    logo: { type: String, require: true },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
}, {
    timestamps: true
})


module.exports = mongoose.model("image", imagesSchema)