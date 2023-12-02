const express = require("express")
const router = express.Router()
const multer = require('multer');
const upload = multer({
    dest: 'uploads/',
  });
const blukController = require("../controller/bulk")

router.post("/leageBluk",upload.fields([{name: "excelFile",  maxCount: 1 },{name : "teamexcelFile",  maxCount: 1 }]),blukController.leagedBlukImport);
router.post("/teadBulk", upload.single('excelFile'), blukController.teamBulkImport)

// router.post("/catLogImport", upload.single('excelFile'), blukController.catLogImport)


module.exports = router