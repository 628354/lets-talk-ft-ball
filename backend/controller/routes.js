const routes = require('../model/routes')

module.exports = {
    routesSave: async (req, res) => {
        try {
            const routess = await routes.create(req.body)
            const result = await routess.save()
            res.status(200).send({
                body: result,
                message: 'Routes Save Successfully',
                success: true
            })
        } catch (error) {
            console.log(error.message)
        }
    },
    getroutes: async (req, res) => {
        try {
            const routess = await routes.find().populate("permissionId")
            res.status(200).send({
                body: routess,
                message: 'Routes Get Successfully',
                success: true
            })
        } catch (error) {
            console.log(error.message)
        }
    },
    updateRoutes: async (req, res) => {
        try {
            const { path, methods, permissionsRequired } = req.body
            const routess = await routes.findByIdAndUpdate({ _id: req.params.id }, { path, methods, permissionsRequired })
            if (routess) {
                res.status(200).send({
                    body: routess,
                    message: 'Routes Update Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    message: 'Routes Id Not found',
                    success: false,

                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}