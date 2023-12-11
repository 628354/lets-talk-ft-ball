const express = require("express");
const router = express.Router();
const path = require("path");

const teamController = require("../controller/team");
const {authentication} = require('../middleware/auth')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/createTeam",authentication, upload.single("image"), teamController.createTeam);
router.get("/getTeams",authentication, teamController.getTeams);
router.get("/teamdetails/:id",authentication, teamController.teamdetails);
router.post(
  "/updateteams/:id",
  upload.single("image"),
  teamController.updateteams
);
router.delete("/removeteam/:id",authentication, teamController.removeteam);

module.exports = router;
