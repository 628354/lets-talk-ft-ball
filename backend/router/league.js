const express = require("express")
const router = express.Router()
const path = require('path');
const csvtojson = require('csvtojson');


const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });
const leaguecontroller = require("../controller/league");

router.post("/addleague", upload.single("logo"), leaguecontroller.addleague)

router.get("/getleagues" , leaguecontroller.getleagues)


const storages = multer.memoryStorage();
const uploads = multer({ storage: storages });

// Route for file upload
router.post('/upload', uploads.single('csvfile'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }


  // Convert the CSV file to JSON
  const csvBuffer = req.file.buffer.toString('utf8');

  csvtojson()
    .fromString(csvBuffer)
    .then((jsonArrayObj) => {
      res.json(jsonArrayObj);
    })
    .catch((error) => {
      console.log(error)
      res.status(500).send('Error converting CSV to JSON.');
    });
});


module.exports = router