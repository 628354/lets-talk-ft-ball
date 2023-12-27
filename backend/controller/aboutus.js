const aboutusmodel = require("../model/aboutus")
const responseHelper = require('../Helpers/Response');

exports.addaboutus = async (req, res) => {
    try {
        const { aboutTitle, aboutText, visionTitle } = req.body
        const files = req.files
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const addaboutus = await aboutusmodel.create({
            bannerImage: files && files.bannerImage ? url + "/uploads/" + files.bannerImage[0].filename : finddata.bannerImage,
            aboutSectionImage: files && files.aboutSectionImage ? url + "/uploads/" + files.aboutSectionImage[0].filename : finddata.aboutSectionImage,
            visionSectionImage: files && files.visionSectionImage ? url + "/uploads/" + files.visionSectionImage[0].filename : finddata.visionSectionImage,
            en: {
                aboutTitle: aboutTitle,
                aboutText: aboutText,
                visionTitle: visionTitle,
            },
            ar: {
                aboutTitle: aboutTitle,
                aboutText: aboutText,
                visionTitle: visionTitle,
            }

        })
        res.send({ status: true, message: "Successfully add aboutus content", body: addaboutus })

    } catch (error) {
        console.log(error.message)
    }
}
exports.getaboutus = async (Request, Response) => {
    const { lung } = Request.params;
    const data = await aboutusmodel.find({}, { [lung]: 1 })
    responseHelper[200].data = data;
    Response.send(responseHelper[200]);
},

exports.updateAboutus = async (req, res) => {
        try {
            const { aboutTitle, aboutText, visionTitle } = req.body;
            const files = req.files;
            const protocol = req.protocol;
            const host = req.host;
            const url = `${protocol}//${host}`;

            const finddata = await aboutusmodel.findById(req.params.Id);
            const updateaboutus = await aboutusmodel.findByIdAndUpdate(req.params.Id, {
                bannerImage: files && files.bannerImage ? url + "/uploads/" + files.bannerImage[0].filename : finddata.bannerImage,
                aboutSectionImage: files && files.aboutSectionImage ? url + "/uploads/" + files.aboutSectionImage[0].filename : finddata.aboutSectionImage,
                visionSectionImage: files && files.visionSectionImage ? url + "/uploads/" + files.visionSectionImage[0].filename : finddata.visionSectionImage,
                en: {
                    aboutTitle: aboutTitle,
                    aboutText: aboutText,
                    visionTitle: visionTitle,
                },
                ar: {
                    aboutTitle: aboutTitle,
                    aboutText: aboutText,
                    visionTitle: visionTitle,
                }
            }, { new: true });

            await updateaboutus.save();

        } catch (error) {
            console.log(error);
            res.send({ status: false, message: "Something went wrong !!" });
        }
    };

