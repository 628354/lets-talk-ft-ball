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

router.post("/addAboutus", upload.fields([{ name: 'image' }, { name: 'image1' }, { name: 'image2' }]), aboutController.addaboutus)

router.get("/getAboutus", aboutController.getaboutus)

router.post("/updateAboutus/:Id", upload.fields([{ name: 'image1' }, { name: 'image2' }]), aboutController.updateAboutus)




module.exports = router