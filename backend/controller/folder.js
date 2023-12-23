const folder = require('../model/folder')
const path = require('path')
const fs = require('fs')

module.exports = {
    folderCreate: async (req, res) => {
        try {
            const folders = await folder.create({
                folderName: req.body.folderName,
                status: req.body.status
            });
            const result = await folders.save();
            const uploadPath = path.join(process.cwd(), 'uploads');

            try {
                if (!fs.existsSync(uploadPath)) {
                    fs.mkdirSync(uploadPath, { recursive: true });
                }

                const folderPath = path.join(uploadPath, req.body.folderName);
                fs.mkdirSync(folderPath);

                res.status(200).send({
                    body: result,
                    message: 'Folder Created Successfully',
                    success: true
                });
            } catch (error) {
                console.error('Error creating folder:', error.message);
                res.status(500).send({
                    message: 'Error creating folder',
                    success: false
                });
            }
        } catch (error) {
            console.error(error.message);
            res.status(500).send({
                message: 'Error creating folder in the database',
                success: false
            });
        }
    },
    folderUpdate: async (req, res) => {
        try {
            const { folderName } = req.body
            const folders = await folder.findByIdAndUpdate({ _id: req.params.id }, { folderName })
            if (folders) {
                res.status(200).send({
                    body: folders,
                    message: 'Folder Updated Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    message: 'Folder Id not Found',
                    success: false
                })
            }

        } catch (error) {
            console.log(error.message)

        }
    },
    folderDelete: async (req, res) => {
        try {
            const folders = await folder.findByIdAndDelete({ _id: req.params.id })
            if (folders) {
                res.status(200).send({
                    body: folders,
                    message: 'Folder Deleted Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    message: 'Folder Id not Found',
                    success: false
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }
}