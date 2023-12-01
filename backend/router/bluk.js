const express = require("express")
const router = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'uploads/xlsx/bulk' }); 
const blukController = require("../controller/bulk")


router.post("/leageBluk" , upload.single('excelFile'),blukController.leagedBlukImport)
router.post("/teadBulk", upload.single('excelFile'), blukController.teamBulkImport)


module.exports = router