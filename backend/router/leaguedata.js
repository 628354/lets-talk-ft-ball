const express = require("express")
const router = express.Router()
const multer = require("multer")

const storages = multer.memoryStorage();
const uploads = multer({ storage: storages });
const leaguedataController = require("../controller/leaguedata")

router.post("/addleaguedata" ,uploads.single("csv") , leaguedataController.importleaguedata)





module.exports = router