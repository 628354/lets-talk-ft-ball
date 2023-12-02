const express = require('express')
const router = express.Router()
const multer = require('multer')
const upload = multer({
    dest: 'uploads/',
  });
const teamCatlog = require('../controller/teamCatlog')


router.post('/uploadCatLog',upload.single('excelFile') ,teamCatlog.CatlogImport)

module.exports = router