const express = require("express")
const app = express()
const { Validator } = require('node-input-validator');

const dotenv = require("dotenv")
dotenv.config()
const PORT = process.env.PORT
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000
const cors = require("cors")
app.use(cors({
    origin: "*"
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Credentials', true);
        return res.status(200).json({});
    }
    next();
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));

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
const permission = require('./router/permission')
const routes = require('./router/routes')
const teamCatlog = require('./router/teamCatlog')
const bannerImage = require('./router/bannerImage')

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }

).then(() => {
    console.log("conntect to db")
}).catch((error) => {
    console.log("not connected test", error)
})


app.use("/", user)
app.use("/", league)
app.use("/", team)
app.use("/", admin)
app.use("/", seasonyear)
app.use("/", leaguedata)
app.use("/", aboutus)
app.use("/", privacy_policy)
app.use("/", contactus)
app.use("/", definition)
app.use("/", cafe)
app.use("/", imagesRoute)
app.use("/", blukImportRouter);
app.use('/', TableRoute);
app.use('/', permission)
app.use('/', routes)
app.use('/', teamCatlog)
app.use('/', bannerImage)


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})