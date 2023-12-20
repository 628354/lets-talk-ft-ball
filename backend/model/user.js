const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["admin", "user", "author", "editor"],
    },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    userName :{type:String, default:""},
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    phone: { type: String, default: "" },
    image: { type: String, default: "" },
    country: { type: String, default: "" },
    countryCode: { type: String, default: "" },
    location: { type: String, default: "" },
    latitude: { type: String, default: "" },
    longitude: { type: String, default: "" },
    date: { type: Date},
    userGroup:{
      type:String,
      enum:["administrator", "Banner", "Cafe", "DataEntry"]
    },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
  },
  { timestamps: true }
);
const user = mongoose.model("user", userSchema);
module.exports = user;