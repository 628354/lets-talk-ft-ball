const express = require('express')
const router = new express.Router()
const permissionAdmin = require('../controller/permissionAdmin')

router.post('/permissionAdmin', permissionAdmin.permissionAdmin)
router.get('/getPermission', permissionAdmin.getPermission)

module.exports = router