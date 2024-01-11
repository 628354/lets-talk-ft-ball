const express = require("express")
const router = express.Router()
const imagesController = require('../controller/images');
const path = require('path')
const fs = require('fs')

const multer = require("multer");
// const upload = multer({
//   dest: 'uploads/',
// });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage })

router.post("/addImage", upload.array("image"), imagesController.addimages);
router.get('/GetImage', imagesController.GetImage)
router.delete('/deleteImage/:id', imagesController.deleteImage)
router.put('/updateImage/:id', imagesController.updateImage)
router.get('/imageSearchInFolder', imagesController.imageSearchInFolder)
module.exports = router
