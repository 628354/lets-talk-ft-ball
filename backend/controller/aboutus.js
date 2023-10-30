const aboutus = require("../model/aboutus")
const aboutusmodel = require("../model/aboutus")


exports.addaboutus = async (req, res) => {
    try {
        const { para1, para2 } = req.body
        const files = req.files

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const addaboutus = await aboutusmodel.create({
            image: req.files.image ? url + "/uploads/" + files.image[0].filename : "",
            para1: para1,
            image1: req.files.image1 ? url + "/uploads/" + files.image1[0].filename : "",
            para2: para2,
            image2: req.files.image2 ? url + "/uploads/" + files.image2[0].filename : "",

        })

        res.send({ status: true, message: "Successfully add aboutus content", aboutusdetails: addaboutus })



    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


exports.getaboutus = async (req, res) => {
    try {
        const getaboutus = await aboutusmodel.find()

        res.send({
            status: true,
            message: "Successfully get aboutus details",
            aboutusdetails: getaboutus
        })

    } catch (error) {

    }
}

exports.updateAboutus = async (req, res) => {
    try {

        const { para1, para2 } = req.body
        const files = req.files

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const finddata = await aboutusmodel.findById(req.params.Id)



        const updateaboutus = await aboutusmodel.findByIdAndUpdate(req.params.Id, {
            image: req.files.image ? url + "/uploads/" + files.image[0].filename : finddata.image,
            para1: para1,
            image1: req.files.image1 ? url + "/uploads/" + files.image1[0].filename : finddata.image1,
            para2: para2,
            image2: req.files.image2 ? url + "/uploads/" + files.image2[0].filename : finddata.image2,
        }, { new: true })

        await updateaboutus.save()

        res.send({ status: true, message: "Successfully update aboutus content", aboutusdetails: updateaboutus })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}