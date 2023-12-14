const mongoose = require("mongoose");

const definitionSchema = mongoose.Schema(
  {
    image: { type: String, required: true, default: "" },
    definition: [
      {
        type: { type: String, required: true, default: "" },
        content: { type: String, required: true, default: "" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("definition", definitionSchema);
