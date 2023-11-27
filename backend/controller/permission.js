const permission = require("../model/permission");

module.exports = {
    create: async (req, res) => {
        try {
            const { role, permissions } = req.body;
            if (role !== "author" && role !== "editor") {
                return res.status(400).send({
                    message: 'Invalid role. Allowed roles are "author" or "editor".',
                    success: false,
                });
            }
            const defaultPermissions = {
                view: false,
                add: false,
                edit: false,
                delete: false,
                all: false,
            };

            const mergedPermissions = { ...defaultPermissions, ...permissions };
            const newPermission = await permission.create({
                role,
                permissions: mergedPermissions,
            });

            const result = await newPermission.save();
            res.status(200).send({
                body: result,
                message: "Permission created successfully",
                success: true,
            });
        } catch (error) {
            console.error(error.message);
        }
    },
    getAllPermission: async (req, res) => {
        try {
            const permissions = await permission.find();
            res.status(200).send({
                body: permissions,
                message: "Permission Get Successfully",
                success: true,
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    permissionsGetById:async(req, res) => {
        try {
            const permissions = await permission.findById({_id:req.params.id})
            if(permissions) {
                res.send({status:true, message:'Permission Get By Id Successfully', body:permissions})
            } else {
                res.send({status:false, message:'permission Id not found'})
            }
        } catch (error) {
           console.log(error.message) 
        }
    }
};
