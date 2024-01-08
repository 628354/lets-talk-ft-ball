const express = require('express')
const router = new express.Router()
const bannerImage = require('../controller/bannerImage')
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

router.post('/createBanner', upload.array("image", 10), bannerImage.createBanner)
module.exports = router