const express = require("express")
const app = express()
const fileupload = require("express-fileupload");


const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT  || 5000

const cors = require("cors")
app.use(cors())

app.use(express.json())
app.use(fileupload());

const path = require('path');

const admin = require("./router/admin")
const user = require("./router/user")
const league = require("./router/league")
const team = require("./router/team")
const seasonyear = require("./router/seasonyear")
const leaguedata = require("./router/leaguedata")
const aboutus = require("./router/aboutus")
const privacy_policy = require("./router/privacyPolicy")
const contactus = require("./router/contactus")
const definition = require("./router/definition")
const cafe = require("./router/cafe")
const permission = require('./router/permission')

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

).then(() => {
    console.log("conntect to db")
}).catch((error) => {
    console.log("not connected test", error)
})



app.use("/", user)
app.use("/", league)
app.use("/", team)
app.use("/" , admin)
app.use("/" , seasonyear)
app.use("/" , leaguedata)
app.use("/" , aboutus)
app.use("/" , privacy_policy)
app.use("/" , contactus)
app.use("/" , definition)
app.use("/" , cafe)
app.use('/', permission)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})