const express = require("express")
const router = express.Router()
const imagesController  = require('../controller/images');
const path = require('path')
const fs = require('fs')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dateFolder = new Date().toISOString().slice(0, 10);
        const uploadPath = path.join(process.cwd(), 'uploads', dateFolder);

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

router.post("/addImage", upload.single("image"), imagesController.addimages);

module.exports = router
