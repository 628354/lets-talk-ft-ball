const express = require('express')
const router = express.Router()
const routesController = require('../controller/routes')
const {authentication} = require('../middleware/auth')

router.post('/routesSave',authentication, routesController.routesSave)
router.get('/getroutes',authentication, routesController.getroutes)
router.put('/updateRoutes/:id',authentication, routesController.updateRoutes)

module.exports = router