const mongoose = require("mongoose");
const permissionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);
const permission = mongoose.model("permission", permissionSchema);
module.exports = permission;
