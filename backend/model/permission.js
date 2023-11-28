const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["1", "2"],  // 1 = author, 2 = editor
    default: "",
    lowercase: true,
    trim: true,
  },
  permission: {
    view: { type: Boolean, default: false },
    add: { type: Boolean, default: false },
    edit: { type: Boolean, default: false },
    delete: { type: Boolean, default: false },
    all: { type: Boolean, default: false },
  },
  createdOn: { type: Date, default: Date.now },
  updatedOn: { type: Date, default: Date.now },
});
const permission = mongoose.model("permission", permissionSchema);
module.exports = permission;
