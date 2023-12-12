const imagesModel = require("../model/images")


exports.addimages = async (req, res) => {
    try {
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const imagesUpload = await imagesModel.create({
            logo: req.file ? url + "/uploads/" + req.file.filename : "",
        })

        res.send({ status: true, mesasge: "Successfully add image", details: imagesUpload })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}