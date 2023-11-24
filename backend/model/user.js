const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    role:{
        type:String,
        enum:["0", "1", "2", "3"], // 0 = admin, 1 = user , 2 = auther, 3 = editor
        default:""
    },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    phone: { type: String, default: "" },
    image:{type:String, default:''},
    country: { type: String, default: "" },
    countryCode: { type: String, default: "" },
    location: { type: String, default: '' },
    latitude: { type: String, default: '' },
    longitude: { type: String, default: '' },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
}, { timestamps: true })
const user = mongoose.model("user", userSchema)
module.exports = user   
