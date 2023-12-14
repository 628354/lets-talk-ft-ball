const express = require('express')
const router = express.Router()
const multer = require('multer')
const {authentication} = require('../middleware/auth')
const upload = multer({
    dest: 'uploads/',
  });
const teamCatlog = require('../controller/teamCatlog')


router.post('/uploadCatLog',upload.single('excelFile') ,teamCatlog.CatlogImport);
router.get('/:lung/find', teamCatlog.findTeam);

module.exports = router