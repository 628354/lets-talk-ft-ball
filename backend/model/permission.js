const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  role: {
    type: String,
    enum: ["admin", "author"],
    default:"admin",
    lowercase: true,
    trim: true,
  },
  userGroup: {
    type: String,
    enum: ["administrator", "Banner", "Cafe", "DataEntry"],
    default:"administrator"
  },
  permission: {
    view: { type: Boolean, default: false },
    add: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
    all: { type: Boolean, default: false },
  },
}, { timestamps: true });

const permission = mongoose.model("permission", permissionSchema);
module.exports = permission;
