const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
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

router.post("/addpolicy",authentication, upload.single("image"), privacyController.addpolicy);

router.get("/:lung/getpolicy",authentication, privacyController.getPolicy);

router.put(
  "/:lung/updatePolicy/:id",authentication,
  upload.single("image"),
  privacyController.updatepolicy
);

router.delete('/deletePrivacy/:id',authentication, privacyController.deletePrivacy)
module.exports = router;
