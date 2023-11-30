const mongoose = require("mongoose");

const definitionSchema = mongoose.Schema(
  {
    image: { type: String, require: true },
    definition: [
      {
        type: { type: String, require: true },
        content: { type: String, require: true },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("definition", definitionSchema);
