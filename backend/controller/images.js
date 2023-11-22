const imagesModel = require("../model/images")


exports.addimages = async (req, res) => {
    try {
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const imagesUpload = await imagesModel.create({
            logo: req.file ? url + "/uploads/catlog-img/" + req.file.filename : "",
        })

        res.send({ status: true, mesasge: "Successfully add definition", details: imagesUpload })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}