const express = require('express')
const router = express.Router()
const permission = require('../controller/permission')

router.post('/createPermission', permission.create)
router.get('/getAllPermission', permission.getAllPermission)
router.get('/permissionsGetById/:id', permission.permissionsGetById)

module.exports = router