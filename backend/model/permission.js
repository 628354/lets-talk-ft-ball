const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  userGroup: { type: String, default: "" },

}, { timestamps: true });

const permission = mongoose.model('permission', permissionSchema)
module.exports = permission