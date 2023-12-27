const imagesModel = require("../model/images")
const path = require('path')
const fs = require('fs')

exports.addimages = async (req, res) => {
    try {
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;

        const imagesUpload = await imagesModel.create({
            logo: req.file ? url + "/uploads/" + req.file.filename : "",
            folderName: req.body.folderName
        });

        if (req.body.folderName) {
            const uploadPath = path.join(process.cwd(), 'uploads');
            const teamFolderPath = path.join(uploadPath, req.body.folderName);

            try {
                if (!fs.existsSync(teamFolderPath)) {
                    fs.mkdirSync(teamFolderPath, { recursive: true });
                }

                const newImagePath = path.join(teamFolderPath, req.file.filename);
                fs.renameSync(req.file.path, newImagePath);
            } catch (error) {
                res.status(500).send({
                    message: 'Error moving image to team folder',
                    success: false
                });
                return;
            }
        }

        res.send({ status: true, message: "Successfully add image", details: imagesUpload });

    } catch (error) {
        console.error('Error adding image:', error.message);
        res.send({ status: false, message: "Something went wrong !!" });
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

