const express = require("express");
const router = express.Router();

const multer = require("multer");
const checkPermission = require('../middleware/checkPermission')
const { authentication } = require("../middleware/auth");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const aboutController = require("../controller/aboutus");

router.post(
  "/addAboutus",
  upload.fields([
    { name: "bannerImage" },
    { name: "aboutSectionImage" },
    { name: "visionSectionImage" },
  ]),
  aboutController.addaboutus
);

router.get("/getAboutus", aboutController.getaboutus);

router.post(
  "/updateAboutus/:Id",checkPermission('updateAboutus'),
  upload.fields([
    { name: "bannerImage" },
    { name: "aboutSectionImage" },
    { name: "visionSectionImage" },
  ]),
  authentication, aboutController.updateAboutus
);

module.exports = router;
