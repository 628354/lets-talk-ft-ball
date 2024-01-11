const express = require("express");
const app = express();
const { Validator } = require("node-input-validator");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(
    cors({
        origin: "*",
    })
);
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *"
    );
    if (req.method === "OPTIONS") {
        res.header(
            "Access-Control-Allow-Methods",
            "GET, PUT, POST, PATCH, DELETE, OPTIONS"
        );
        res.setHeader("Access-Control-Allow-Credentials", true);
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

const user = require("./router/user");
const league = require("./router/league");
const seasonyear = require("./router/seasonyear");
const leaguedata = require("./router/leaguedata");
const aboutus = require("./router/aboutus");
const privacy_policy = require("./router/privacyPolicy");
const contactus = require("./router/contactus");
const definition = require("./router/definition");
const cafe = require("./router/cafe");
const imagesRoute = require("./router/images");
const blukImportRouter = require("./router/bluk");
const TableRoute = require("./router/Table_graph");
const permission = require("./router/permission");
const routes = require("./router/routes");
const teamCatlog = require("./router/teamCatlog");
const bannerImage = require("./router/bannerImage");
const folder = require("./router/folder");
const permissionAdmin = require("./router/permissionAdmin");

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}
connectToDatabase();

const routess = [user, league, seasonyear, leaguedata, aboutus, privacy_policy, contactus, definition, cafe, imagesRoute, blukImportRouter, TableRoute, permission, routes, teamCatlog, bannerImage, folder, permissionAdmin];
routess.forEach(route => app.use("/", route));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



const port = process.env.port;
app.listen(port, () => {
    console.log(`Server is running at ${port}`);
}); 
