const mongoose = require("mongoose")

const leaguedataSchema = mongoose.Schema({

    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "team"
    } ,

    games : {type : String , require : true},

    win : {type : String , require : true} ,

    draw : {type : String , require : true} ,

    lose : {type : String , require : true} ,

    goals_scored  : {type : String , require : true} ,

    goals_conceded : {type : String , require : true} ,

    points : {type : String , require : true} ,

    point_gap : {type : String , require : true} ,

    gs_gc : {type  : String , require : true} ,

    win : {type : String , require : true}
}, {
    timestamps: true
})

module.exports = mongoose.model("leaguedata" , leaguedataSchema)