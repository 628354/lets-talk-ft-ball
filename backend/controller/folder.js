const folder = require('../model/folder')
const path = require('path')
const fs = require('fs')

module.exports = {
    folderCreate : async (req, res) => {
        try {
            const existingFolder = await folder.findOne({ folderName: req.body.folderName });
            if (existingFolder) {
                return res.status(400).send({
                    message: 'Folder with the same name already exists',
                    success: false
                });
            }
    
            const newFolder = new folder({
                folderName: req.body.folderName,
                status: req.body.status
            });
    
            const result = await newFolder.save();
            const uploadPath = path.join(process.cwd(), 'uploads');
    
            try {
                if (!fs.existsSync(uploadPath)) {
                    fs.mkdirSync(uploadPath, { recursive: true });
                }
    
                const folderPath = path.join(uploadPath, req.body.folderName);
                if (!fs.existsSync(folderPath)) {
                    fs.mkdirSync(folderPath);
                } else {
                    return res.status(400).send({
                        message: 'Folder with the same name already exists in the file system',
                        success: false
                    });
                }
    
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
            console.error('Error creating folder in the database:', error.message);
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
    folderGet: async (req, res) => {
        try {
            const folders = await folder.find().sort({ createdAt: -1 })
            res.status(200).send({
                body: folders,
                message: 'Get All Folder Sucessfully',
                success: true
            })
        } catch (error) {
            console.log(error.message)
        }
    },
    folderDelete : async (req, res) => {
        try {
            const folderId = req.params.id;
            const deletedFolder = await folder.findByIdAndDelete(folderId);
            if (deletedFolder) {
                const folderPath = path.join(process.cwd(), 'uploads', deletedFolder.folderName);
    
                if (fs.existsSync(folderPath)) {
                    fs.rmdirSync(folderPath, { recursive: true });
                }
                res.status(200).send({
                    body: deletedFolder,
                    message: 'Folder Deleted Successfully',
                    success: true
                });
            } else {
                res.status(404).send({
                    message: 'Folder ID not found',
                    success: false
                });
            }
        } catch (error) {
            res.status(500).send({
                message: 'Error deleting folder',
                success: false
            });
        }
    }
}