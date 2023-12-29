const express = require("express");
const router = express.Router();
const { authentication } = require('../middleware/auth')
const seasonyearController = require("../controller/seasonyear");

router.post("/addseasonyear", seasonyearController.addleagueyear);
router.get("/getyears", seasonyearController.getyears);
router.get("/getseasonById/:id", seasonyearController.getById);
router.post("/updateSeasonyear/:yearId", seasonyearController.updateyears);
router.delete("/removeyear/:id", seasonyearController.removeyear);
router.get('/getsessonYear',seasonyearController.getsessonYear)
router.get("/getLatestYears", seasonyearController.getLatestYears);



module.exports = router;
