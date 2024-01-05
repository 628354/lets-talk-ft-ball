const imagesModel = require("../model/images")
const path = require('path')
const fs = require('fs')
const folder = require('../model/folder')

exports.addimages = async (req, res) => {
    try {
        const folderName = req.body.folderName;
        const existingFolder = await folder.findOne({ folderName });
        let folderId;
        if (existingFolder) {
            folderId = existingFolder._id;
        } else {
            const newFolder = new folder({
                folderName,
                status: req.body.status,
            });

            const createdFolder = await newFolder.save();
            folderId = createdFolder._id;
        }

        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;

        const imagesUpload = await imagesModel.create({
            image: req.files.map((file) => url + "/uploads/" + file.filename),
            folderId,
            status: req.body.status,
        });

        const uploadPath = path.join(process.cwd(), 'uploads', folderName);
        for (const file of req.files) {
            const newImagePath = path.join(uploadPath, file.filename);
            fs.renameSync(file.path, newImagePath);
        }
        res.status(200).send({
            status: true,
            message: "Successfully added images",
            details: imagesUpload,
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            message: 'Internal Server Error',
            error: error.message,
        });
    }
};
exports.GetImage = async (req, res) => {
    try {
        const data = await imagesModel.find().sort({ createdAt: -1 })
        res.send({ status: true, message: 'Image Get Successfully', details: data })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}
exports.getImageFolderName = async (req, res) => {
    try {
        const { folderName } = req.query;
        if (!folderName) {
            return res.status(400).json({ status: false, message: 'Folder name is required for the search.' });
        }
        const matchingFolders = await imagesModel.find({ folderName });
        res.send({ status: true, message: 'Matching folders fetched successfully', details: matchingFolders });
    } catch (error) {
        console.error('Error searching for folder names:', error.message);
        res.send({ status: false, message: 'Something went wrong!' });
    }
};
exports.updateImage = async (req, res) => {
    try {
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const data = await imagesModel.findByIdAndUpdate({ _id: req.params.id }, { logo: req.file ? url + "/uploads/" + req.file.filename : "", }
        )
        if (data) {
            res.send({ status: true, message: 'Image Updated Successfully', details: data })
        } else {
            res.send({ status: false, message: "Image Id Not Found" })

        }

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })

    }
}
exports.deleteImage = async (req, res) => {
    try {
        const data = await imagesModel.findByIdAndDelete({ _id: req.params.id })
        if (data) {
            res.send({ status: true, message: 'Image Deleted Successfully', details: data })
        } else {
            res.send({ status: false, message: 'Image Id not Found' })
        }
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })

    }
}
