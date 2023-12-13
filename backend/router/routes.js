const express = require('express')
const router = express.Router()
const routesController = require('../controller/routes')

router.post('/routesSave', routesController.routesSave)
router.get('/getroutes', routesController.getroutes)
router.put('/updateRoutes/:id', routesController.updateRoutes)

module.exports = router