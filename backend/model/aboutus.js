const mongoose = require("mongoose")


const aboutusSchema = mongoose.Schema({

    image: { type: String, require: true },

    para1: { type: String, require: true },

    image1: { type: String, require: true },

    para2: { type: String, require: true },

    image2: { type: String, require: true },



},
    { timestamps: true }
)

module.exports = mongoose.model("aboutus", aboutusSchema)

