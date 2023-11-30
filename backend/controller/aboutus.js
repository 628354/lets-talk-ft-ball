const aboutus = require("../model/aboutus")
const aboutusmodel = require("../model/aboutus")
const checkPermission = require('../controller/permission')

exports.addaboutus = async (req, res) => {
    try {
        const { aboutTitle, aboutText, visionTitle } = req.body
        const files = req.files
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`
        const addaboutus = await aboutusmodel.create({
            bannerImage: req.files.image ? url + "/uploads/" + files.bannerImage[0].filename : "",
            aboutTitle: aboutTitle,
            aboutText: aboutText,
            aboutSectionImage: req.files.image1 ? url + "/uploads/" + files.aboutSectionImage[0].filename : "",
            visionSectionImage: req.files.image2 ? url + "/uploads/" + files.visionSectionImage[0].filename : "",
            visionTitle: visionTitle,

        })
        res.send({ status: true, message: "Successfully add aboutus content", aboutusdetails: addaboutus })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


exports.getaboutus = async (req, res) => {
    try {
        const getaboutus = await aboutusmodel.find()
        res.status(200).send({
            body: getaboutus,
            message: 'Get Aboutus Successfully',
            success: true
        })
    } catch (error) {
        console.log(error.message)
    }
}

exports.updateAboutus = async (req, res) => {
    try {
        checkPermission('author')(req, res, async () => {
            const { aboutTitle, aboutText, visionTitle } = req.body;
            const files = req.files;
            const protocol = req.protocol;
            const host = req.host;
            const url = `${protocol}//${host}`;

            const finddata = await aboutusmodel.findById(req.params.Id);
            const updateaboutus = await aboutusmodel.findByIdAndUpdate(req.params.Id, {
                bannerImage: files && files.bannerImage ? url + "/uploads/" + files.bannerImage[0].filename : finddata.bannerImage,
                aboutTitle: aboutTitle,
                aboutText: aboutText,
                aboutSectionImage: files && files.aboutSectionImage ? url + "/uploads/" + files.aboutSectionImage[0].filename : finddata.aboutSectionImage,
                visionSectionImage: files && files.visionSectionImage ? url + "/uploads/" + files.visionSectionImage[0].filename : finddata.visionSectionImage,
                visionTitle: visionTitle,
            }, { new: true });

            await updateaboutus.save();
            res.send({ status: true, message: "Successfully update aboutus content", aboutusdetails: updateaboutus });
        }
        ); 
    } catch (error) {
        console.log(error);
        res.send({ status: false, message: "Something went wrong !!" });
    }
};
