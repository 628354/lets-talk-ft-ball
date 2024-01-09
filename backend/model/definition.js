const mongoose = require("mongoose");
const definitionSchema = new mongoose.Schema(
  {
    image: { type: String, default: "" },
    en: {
      type: { type: String, default: "" },
      content: { type: String, default: "" },
    },
    ar: {
      type: { type: String, default: "" },
      content: { type: String, default: "" },
    },
  },
  { timestamps: true }
);
const definition = mongoose.model("definition", definitionSchema);
module.exports = definition;

// const definitionSchema = mongoose.Schema(
//   {
//     image: { type: String, default: "" },
//     en: {
//       definition: [
//         {
//           type: { type: String, default: "" },
//           content: { type: String, default: "" },
//         },
//       ],
//     },
//     ar: {
//       definition: [
//         {
//           type: { type: String, default: "" },
//           content: { type: String, default: "" },
//         },
//       ],
//     }

//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("definition", definitionSchema);
