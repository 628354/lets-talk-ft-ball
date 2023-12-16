const imagesModel = require("../model/images")
const path = require('path')
const fs = require('fs')

exports.addimages = async (req, res) => {
    try {
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}//${host}`;
        const uploadsPath = "uploads";
        const uploadsDirectory = path.join(__dirname, uploadsPath);
        if (!fs.existsSync(uploadsDirectory)) {
            fs.mkdirSync(uploadsDirectory);
        }
        const folderName = req.body.folderName || 'default';
        const folderPath = path.join(uploadsDirectory, folderName);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath);
        }
        const imagesUploadPromises = req.files.map(async (file) => {
            const imageFilename = file.filename;
            const imagePath = path.join(folderPath, imageFilename);
            const imageUrl = `${url}/${uploadsPath}/${folderName}/${imageFilename}`;
            return await imagesModel.create({
                folderName,
                logo: imageUrl,
                status: "active",
            });
        });
        const imagesUpload = await Promise.all(imagesUploadPromises);
        res.send({ status: true, message: "Successfully added images", details: imagesUpload });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        });
    }
};


exports.GetImage = async (req, res) => {
    try {
        const imageData = await imagesModel.find().select('folderName logo _id');
        res.status(200).send({
            body: imageData,
            message: 'Get All images successfully',
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message,
        });
    }
}