const imagesModel = require("../model/images")


exports.addimages = async (req, res) => {
    try {
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const imagesUpload = await imagesModel.create({
            logo: req.file ? url + "/uploads/" + req.file.filename : "",
            folderName: req.body.folderName
        })

        res.send({ status: true, mesasge: "Successfully add image", details: imagesUpload })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}
exports.GetImage = async (req, res) => {
    try {
        const data = await imagesModel.find()
        res.send({ status: true, message: 'Image Get Successfully', details: data })
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