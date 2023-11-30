const express = require("express");
const router = express.Router();

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
const privacyController = require("../controller/privacypolicy");

router.post("/addpolicy", upload.single("image"), privacyController.addpolicy);

router.get("/getpolicy", privacyController.getPolicy);

router.post(
  "/updatePolicy/:policyId",
  upload.single("image"),
  privacyController.updatepolicy
);

router.delete('/deletePrivacy/:id', privacyController.deletePrivacy)
module.exports = router;
