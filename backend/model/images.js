const mongoose = require("mongoose")


const imagesSchema = mongoose.Schema({
    image: [{ type: String }],
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'folder' }
}, {
    timestamps: true
})


module.exports = mongoose.model("image", imagesSchema)