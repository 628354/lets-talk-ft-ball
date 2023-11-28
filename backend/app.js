const express = require("express")
const app = express()

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const bodyParser = require('body-parser');

const cors = require("cors")
app.use(cors())

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb', extended: true}));

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
const imagesRoute = require('./router/images');
const blukImportRouter = require('./router/bluk')
const TableRoute = require('./router/Table_graph');

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
app.use("/" , admin)
app.use("/" , seasonyear)
app.use("/" , leaguedata)
app.use("/" , aboutus)
app.use("/" , privacy_policy)
app.use("/" , contactus)
app.use("/" , definition)
app.use("/" , cafe)
app.use("/" , imagesRoute)
app.use("/", blukImportRouter);
app.use('/api/v1/graph',TableRoute);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})