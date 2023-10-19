require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.5l3xehm.mongodb.net/`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successful"))
  .catch((err) => {
    console.log(err);
  });