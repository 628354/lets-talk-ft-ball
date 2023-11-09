const express = require("express")
const router = express.Router()

const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + '-' + file.originalname);
    },
});

const upload = multer({ storage: storage });

const cafecontroller = require("../controller/cafe")

router.post("/addcafedata" ,upload.fields([{name : "logo"} , {name : "cafe_image"}]) , cafecontroller.addcafedata)

router.post("/addCafeleaguedata/:cafe_id" , upload.single("cafe_image") , cafecontroller.addcafeleaguesdata)


module.exports = router