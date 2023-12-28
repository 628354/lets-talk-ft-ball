const mongoose = require("mongoose");

const policySchema = mongoose.Schema(
  {
    en: {
      image: { type: String, require: true },
      privacy_policy: { type: String, require: true },
    },
    ar: {
      image: { type: String, require: true },
      privacy_policy: { type: String, require: true },
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("policy", policySchema);
