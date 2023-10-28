const mongoose = require("mongoose")

const seasonSchema = mongoose.Schema({

    name: { type: String, require: true },
    startDate: { type: Date, require: true },
    endDate: { type: Date, require: true },
    // matches: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'FootballMatch',
    //   },
    // ]

    active: { type: Boolean, default : true }

}, {
    timestamps: true
})


module.exports = mongoose.model("seasons", seasonSchema)