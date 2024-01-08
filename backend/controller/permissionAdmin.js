const permissionAdmin = require('../model/permissionAdmin')
module.exports = {
    permissionAdmin: async (req, res) => {
        try {
            const routePermissions = req.body.routePermissions || {};
            const permissions = await permissionAdmin.create({
                userId: req.body.userId,
                routerId: req.body.routerId,
                permissionId: req.body.permissionId,
                permissions: {
                    add: true, 
                    delete: true, 
                    update: true,  
                    get: routePermissions.get || false, 
                },
            });
    
            const result = await permissions.save();
            res.status(200).send({
                body: result,
                message: 'Admin Permission to user successfully',
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
            });
        }
    },
    
}