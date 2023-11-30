const express = require("express");
const router = express.Router();
const path = require("path");

const teamController = require("../controller/team");

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
router.post("/addteam", upload.single("image"), teamController.addTeam);
router.get("/getTeams", teamController.getTeams);
router.get("/teamdetails/:id", teamController.teamdetails);
router.post(
  "/updateteam/:teamId",
  upload.single("image"),
  teamController.updateteams
);
router.delete("/removeteam/:id", teamController.removeteam);

module.exports = router;
