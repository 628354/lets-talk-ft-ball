const mongoose = require('mongoose')
const bannerImageScheam = new mongoose.Schema({
    name:{
        type:String,
        default:""
    },
    image:[{
        type:String,
        default:""
    }],
    status:{
        type:String,
        enum:["active", "enactive"],
        default:"active"
    }
}, {timestamps:true})

const bannerImage = mongoose.model("bannerImage", bannerImageScheam)
module.exports = bannerImage