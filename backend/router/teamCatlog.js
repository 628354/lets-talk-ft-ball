const express = require('express')
const router = express.Router()
const {authentication} = require('../middleware/auth')
const multer = require('multer')
const upload = multer({
    dest: 'uploads/',
  });
const teamCatlog = require('../controller/teamCatlog')


router.post('/uploadCatLog',upload.single('excelFile') ,teamCatlog.CatlogImport);
router.get('/:lung/find',authentication, teamCatlog.findTeam);

module.exports = router