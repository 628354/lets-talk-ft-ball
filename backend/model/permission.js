const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  routesId: [{ type: mongoose.Schema.Types.ObjectId, ref: "routes", required: true }],
  userGroup: { type: String, default: "" },

}, { timestamps: true });

const permission = mongoose.model('permission', permissionSchema)
module.exports = permission