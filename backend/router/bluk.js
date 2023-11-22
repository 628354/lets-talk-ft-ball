const express = require("express")
const router = express.Router()
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

const blukController = require("../controller/bulk")



router.post("/leageBluk" , upload.single('excelFile'),blukController.leagedBlukImport)



module.exports = router