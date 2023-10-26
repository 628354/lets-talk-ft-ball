const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({

    teamName: { type: String, require: true },

    image: { type: String, require: true }
},
    { timestamps: true }

)


module.exports  = mongoose.model("team" , teamSchema)