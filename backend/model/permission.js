const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  role: {
    type: String,
    enum: ["admin", "author"],
    default: "admin",
    lowercase: true,
    trim: true,
  },
  userGroup: {
    type: String,
    enum: ["administrator", "Banner", "Cafe", "DataEntry"],
    default: "administrator",
  },
  path: { type: [String], default: [] },
  methods: { type: [String], default: [] },

}, { timestamps: true });

const permission = mongoose.model('permission', permissionSchema)
module.exports = permission