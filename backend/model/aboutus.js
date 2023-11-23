const mongoose = require("mongoose")


const aboutusSchema = mongoose.Schema({

    bannerImage: { type: String, require: true },
    aboutTitle: { type: String, require: true },
    aboutText: { type: String, require: true },
    aboutSectionImage: { type: String, require: true },
    visionSectionImage: { type: String, require: true },
    visionTitle: { type: String, require: true }



},
    { timestamps: true }
)

module.exports = mongoose.model("aboutus", aboutusSchema)

