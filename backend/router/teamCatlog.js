const express = require('express')
const router = express.Router()
const multer = require('multer')
const { authentication } = require('../middleware/auth')

const upload = multer({
  dest: 'uploads/catalog/logo/Premier L/',
});
const teamCatlog = require('../controller/teamCatlog')


router.post('/uploadCatLog', upload.single('excelFile'), teamCatlog.CatlogImport);
router.get('/:lung/find', teamCatlog.findTeam);
router.get("/:lung/findAll",teamCatlog.findAllTeam);

module.exports = router