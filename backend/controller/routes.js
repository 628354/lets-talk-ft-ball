const routes = require('../model/routes')

module.exports = {
    routesSave: async (req, res) => {
        try {
            const { routesData } = req.body;

            if (!routesData || !Array.isArray(routesData)) {
                return res.status(400).send({
                    message: 'Invalid request body format. Expected an array of routes.',
                    success: false
                });
            }

            const createdRoutes = await routes.create(routesData);

            res.status(200).send({
                body: createdRoutes,
                message: 'Routes Saved Successfully',
                success: true
            });
        } catch (error) {
            console.error(error.message);
            res.status(500).send({
                message: 'Enternal Server Error',
                success: false,
                error: error.message
            });
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
            const { path } = req.body;
            const updatedRoute = await routes.findByIdAndUpdate(
                { _id: req.params.id },
                { path },
            );

            if (updatedRoute) {
                res.status(200).send({
                    body: updatedRoute,
                    message: 'Routes Update Successfully',
                    success: true
                });
            } else {
                res.status(404).send({
                    message: 'Routes Id Not found',
                    success: false,
                });
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send({
                message: 'Enternal Server Error',
                success: false,
                error: error.message
            });
        }
    }
}