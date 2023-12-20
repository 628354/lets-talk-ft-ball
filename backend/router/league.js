const express = require("express");
const router = express.Router();
const path = require("path");
const csvtojson = require("csvtojson");

const multer = require("multer");
const { authentication } = require('../middleware/auth')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

const leaguecontroller = require("../controller/league");
router.post("/addleague", upload.single("image"), leaguecontroller.addleague);
router.get("/getleagues", leaguecontroller.getleagues);
router.get('/getleagusById/:id', authentication, leaguecontroller.getleagusById)
router.post(
  "/updateLeague/:leagueId", authentication, upload.single("image"),
  leaguecontroller.update
);
router.delete("/removeLeague/:leagueId", authentication, leaguecontroller.delete);

const storages = multer.memoryStorage();
const uploads = multer({ storage: storages });

const seasonmodel = require("../model/leaguedata");
// Route for file upload
router.post("/upload", uploads.single("csvfile"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  // Convert the CSV file to JSON
  const csvBuffer = req.file.buffer.toString("utf8");

  await csvtojson()
    .fromString(csvBuffer)
    .then((jsonArrayObj) => {
      var army = [];
      for (var i = 0; i < jsonArrayObj.length; i++) {
        var obj = {};
        obj.games = jsonArrayObj[i]["games"];
        obj.win = jsonArrayObj[i]["win"];
        // obj.house=jsonObj[i]['House'];
        army.push(obj);
      }
      console.log(army);
      const data = seasonmodel
        .insertMany(army)
        .then(function () {
          res.status(200).send({
            message: "Successfully Uploaded!",
            data: data,
          });
        })
        .catch(function (error) {
          res.status(500).send({
            message: "failure",
            error,
          });
        });
      // res.json(jsonArrayObj);
    })

    .catch((error) => {
      console.log(error);
      res.status(500).send("Error converting CSV to JSON.");
    });
});

module.exports = router;
