const mongoose = require("mongoose");

const policySchema = mongoose.Schema(
  {
    image: { type: String, require: true },
    en: {
      privacy_policy: { type: String, require: true },
    },
    ar: {
      privacy_policy: { type: String, require: true },
    }

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("policy", policySchema);
