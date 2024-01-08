const express = require('express')
const router = new express.Router()
const permissionAdmin = require('../controller/permissionAdmin')

router.post('/permissionAdmin', permissionAdmin.permissionAdmin)

module.exports = router