const express = require("express");
const router = express.Router();

const seasonyearController = require("../controller/seasonyear");

router.post("/addseasonyear", seasonyearController.addleagueyear);
router.get("/getyears", seasonyearController.getyears);
router.get("/getseasonById/:id", seasonyearController.getById);
router.post("/updateSeasonyear/:yearId", seasonyearController.updateyears);
router.delete("/removeyear/:id", seasonyearController.removeyear);

module.exports = router;
