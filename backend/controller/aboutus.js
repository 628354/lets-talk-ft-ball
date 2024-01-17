const aboutusmodel = require("../model/aboutus")
const responseHelper = require('../Helpers/Response');

exports.addaboutus = async (req, res) => {
    try {
        const files = req.files
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const { bannerImage, aboutSectionImage, visionSectionImage, en, ar } = req.body
        const addaboutus = await aboutusmodel.create({
            bannerImage: bannerImage,
            aboutSectionImage: aboutSectionImage,
            visionSectionImage: visionSectionImage,
            en: {
                aboutTitle: en.aboutTitle || "",
                aboutText: en.aboutText || "",
                visionTitle: en.visionTitle || "",
                visionText: en.visionText || "",
                missionTitle: en.missionTitle || "",
                missionText: en.missionText || ""
            },
            ar: {
                aboutTitle: ar.aboutTitle || "",
                aboutText: ar.aboutText || "",
                visionTitle: ar.visionTitle || "",
                visionText: ar.visionText || "",
                missionTitle: ar.missionTitle || "",
                missionText: ar.missionText || ""
            }

        })
        res.send({ status: true, message: "Successfully add aboutus content", body: addaboutus })

    } catch (error) {
        console.log(error.message)
    }
}
exports.getaboutus = async (Request, Response) => {
    const { lung } = Request.params;
    const data = await aboutusmodel.find({}, { [lung]: 1, bannerImage: 1, aboutSectionImage: 1, visionSectionImage: 1 })
    responseHelper[200].data = data;
    Response.send(responseHelper[200]);
},
exports.updateAboutus = async (req, res) => {
        try {
            const files = req.files;
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}//${host}`;
            const { bannerImage, aboutSectionImage, visionSectionImage, en, ar } = req.body
            const updateaboutus = await aboutusmodel.findByIdAndUpdate({ _id: req.params.id }, {
                bannerImage: bannerImage,
                aboutSectionImage: aboutSectionImage,
                visionSectionImage: visionSectionImage,
                en: {
                    aboutTitle: en.aboutTitle || "",
                    aboutText: en.aboutText || "",
                    visionTitle: en.visionTitle || "",
                    visionText: en.visionText || "",
                    missionTitle: en.missionTitle || "",
                    missionText: en.missionText || ""
                },
                ar: {
                    aboutTitle: ar.aboutTitle || "",
                    aboutText: ar.aboutText || "",
                    visionTitle: ar.visionTitle || "",
                    visionText: ar.visionText || "",
                    missionTitle: ar.missionTitle || "",
                    missionText: ar.missionText || ""
                }
            })
            if (updateaboutus) {
                res.status(200).send({
                    body: updateaboutus,
                    message: 'Leagues Updated Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    message: 'Leagues Id Not Found',
                    success: false
                })
            }
        } catch (error) {
            res.status(500).send({
                message: 'Enternal Server Error',
                success: false,
                error: error.message
            })
        }
    }
exports.getAboutUs = async (req, res) => {
    try {
        const getall = await aboutusmodel.find()
        res.status(200).send({
            body: getall,
            message: 'Get All AboutUs successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            mesasge: "Enternal Server Error",
            success: false,
            error: error.mesasge
        })
    }
}