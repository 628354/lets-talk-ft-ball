const express = require('express')
const router = new express.Router()
const folder = require('../controller/folder')


router.post('/createfolder', folder.folderCreate)
router.put('/folderUpdate/:id', folder.folderUpdate)
router.delete('/folderDelete/:id', folder.folderDelete)

module.exports = router