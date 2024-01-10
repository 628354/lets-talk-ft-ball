const express = require('express')
const router = new express.Router()
const permissionAdmin = require('../controller/permissionAdmin')

router.post('/permissionAdmin', permissionAdmin.permissionAdmin)
router.get('/getPermission', permissionAdmin.getPermission)
router.put('/updatePermission/:id', permissionAdmin.updatePermission)

module.exports = router