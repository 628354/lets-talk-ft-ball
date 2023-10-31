const express = require("express")
const router = express.Router()

const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const aboutController = require("../controller/aboutus")

router.post("/addAboutus", upload.fields([{ name: 'bannerImage' }, { name: 'aboutSectionImage' }, { name: 'visionSectionImage' }]), aboutController.addaboutus)

router.get("/getAboutus", aboutController.getaboutus)

router.post("/updateAboutus/:Id",  upload.fields([{ name: 'bannerImage' }, { name: 'aboutSectionImage' }, { name: 'visionSectionImage' }]), aboutController.updateAboutus)




module.exports = router