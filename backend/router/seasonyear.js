const express = require("express");
const router = express.Router();
const { authentication } = require('../middleware/auth')
const seasonyearController = require("../controller/seasonyear");

router.post("/addseasonyear", authentication, seasonyearController.addleagueyear);
router.get("/getyears", authentication, seasonyearController.getyears);
router.get("/getseasonById/:id", authentication, seasonyearController.getById);
router.post("/updateSeasonyear/:yearId", authentication, seasonyearController.updateyears);
router.delete("/removeyear/:id", authentication, seasonyearController.removeyear);
router.get('/getsessonYear', authentication, seasonyearController.getsessonYear)
router.get("/getLatestYears", authentication, seasonyearController.getLatestYears);
module.exports = router;
