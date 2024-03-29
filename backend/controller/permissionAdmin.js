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
    getPermission: async (req, res) => {
        try {
            const permission = await permissionAdmin.find().populate("userId routerId permissionId")
            res.status(200).send({
                body: permission,
                message: 'Get Permission Sucessfully',
                success: true
            })
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
            });
        }
    },
    updatePermission: async (req, res) => {
        try {
            const { userId, routerId, permissionId, permissions } = req.body;
            const updatePermissions = await permissionAdmin.findByIdAndUpdate(
                { _id: req.params.id },
                { userId, routerId, permissionId, permissions }
            );

            if (updatePermissions) {
                res.status(200).send({
                    body: updatePermissions,
                    message: 'Permission Modify Successfully',
                    success: true
                });
            } else {
                res.status(404).send({
                    message: 'Permission Id not Found',
                    success: false
                });
            }
        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error',
                success: false,
                error: error.message,
            });
        }
    }



}