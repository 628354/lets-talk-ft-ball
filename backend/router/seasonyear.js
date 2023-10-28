const express = require("express")
const router = express.Router()


const seasonyearController = require("../controller/seasonyear")

router.post("/addseasonyear", seasonyearController.addleagueyear)

router.get("/getyears", seasonyearController.getyears)

router.post("/updateSeasonyear/:seasonId" , seasonyearController.updateyears)





module.exports = router