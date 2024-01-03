const checkPermission = require("../middleware/checkPermission");
const permission = require("../model/permission");
const usermodel = require('../model/user')
module.exports = {
    create: async (req, res) => {
        try {

            const { routesId, userGroup } = req.body;
            if (!userGroup) {
                return res.status(400).send({
                    message: "User group is a required field.",
                    success: false,
                });
            }
            const newPermission = await permission.create({
                routesId: routesId || [],
                userGroup,
            });

            const result = await newPermission.save();
            res.status(200).send({
                body: result,
                message: "Permission created successfully",
                success: true,
            });

        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
                error: error.message,
            });
        }
    },

    getById: async (req, res) => {
        try {
            const permissions = await permission.findById({ _id: req.params.id });
            if (permissions) {
                res.status(200).send({
                    body: permissions,
                    message: "Permission Get By Id successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Permission Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Enternal Server Error",
                success: false,
                error: error.message,
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const permissions = await permission.find().select('userGroup');;
            res.status(200).send({
                body: permissions,
                message: "Get All Permission Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Enternal Server Error",
                success: false,
                error: error.message,
            });
        }
    },

    update: async (req, res) => {
        try {
            const { userGroup, path, methods } = req.body;
            const permissions = await permission.findByIdAndUpdate(
                req.params.id,
                { userGroup, path, methods },
                { new: true }
            );

            if (permissions) {
                res.status(200).send({
                    body: permissions,
                    message: "Permission Updated Successfully",
                    success: true,
                });
            } else {
                res.status(404).send({
                    message: "Permission Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
                error: error.message,
            });
        }
    },

    delete: async (req, res) => {
        try {
            const permissions = await permission.findByIdAndDelete({
                _id: req.params.id,
            });
            if (permissions) {
                res.status(200).send({
                    body: permissions,
                    message: "Permission Deleted Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Permission Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Enternal Server Error",
                success: false,
                error: error.message,
            });
        }
    },

    statusUpdate: async (req, res) => {
        try {
            const { type } = req.body;
            const updatedPermission = await permission.findByIdAndUpdate(
                { _id: req.params.id },
                { type: type }
            );
            if (!updatedPermission) {
                return res.status(404).send({
                    message: 'Permission not found',
                    success: false
                });
            }

            let responseMessage = 'Status Updated Successfully';
            if (type == 1) {
                responseMessage += ' - Author';
            } else if (type == 2) {
                responseMessage += ' - Editor';
            }

            res.status(200).send({
                body: updatedPermission,
                message: responseMessage,
                success: true
            });

        } catch (error) {
            console.error('Error updating status:', error);
            res.status(500).send({
                message: 'Internal Server Error',
                success: false
            });
        }
    }
};
