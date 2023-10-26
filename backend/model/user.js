const mongoose = require("mongoose")
const validator = require('validator');


const userSchema = mongoose.Schema({

    name: { type: String, require: true },
    email: {
        type: String,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
        }
    },
    password: { type: String, require: true },

    status: { type: String, enum: ["active", "inactive"], default: "active" } ,

    type : {type : String , enum :["user" , "admin"]}
},
    { timestamps: true }
)

module.exports = mongoose.model("user" , userSchema)

