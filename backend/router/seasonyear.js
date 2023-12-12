const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const seasonyearController = require("../controller/seasonyear");

router.post("/addseasonyear", seasonyearController.addleagueyear);
router.get("/getyears", seasonyearController.getyears);
router.get("/getseasonById/:id",authentication, seasonyearController.getById);
router.post("/updateSeasonyear/:yearId",authentication, seasonyearController.updateyears);
router.delete("/removeyear/:id",authentication, seasonyearController.removeyear);
router.get('/getsessonYear',seasonyearController.getsessonYear)

module.exports = router;
