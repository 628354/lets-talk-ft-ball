const express = require("express")
const router = express.Router()


const seasonyearController = require("../controller/seasonyear")

router.post("/addseasonyear", seasonyearController.addleagueyear)

router.get("/getyears", seasonyearController.getyears)

router.get("/getseasonById/:yearId" , seasonyearController.getById)

router.post("/updateSeasonyear/:yearId" , seasonyearController.updateyears)

router.delete("/removeyear/:yearId" , seasonyearController.removeyear)





module.exports = router