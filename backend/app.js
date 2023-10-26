const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT

const cors = require("cors")
app.use(cors())

app.use(express.json())

const path = require('path');

const user = require("./router/user")
const league = require("./router/league")
const team = require("./router/team")

const mongoose = require("mongoose")

mongoose.connect("mongodb://0.0.0.0:27017/Leagues",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

).then(() => {
    console.log("Database is connected")
}).catch((error) => {
    console.log("not connected", error)
})



app.use("/", user)
app.use("/", league)
app.use("/", team)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})