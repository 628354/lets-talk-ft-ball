const aboutusmodel = require("../model/aboutus")
const responseHelper = require('../Helpers/Response');

exports.addaboutus = async (req, res) => {
    try {
        const files = req.files
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const { en, ar } = req.body
        const addaboutus = await aboutusmodel.create({
            bannerImage: files && files.bannerImage ? url + "/uploads/" + files.bannerImage[0].filename : "",
            aboutSectionImage: files && files.aboutSectionImage ? url + "/uploads/" + files.aboutSectionImage[0].filename : "",
            visionSectionImage: files && files.visionSectionImage ? url + "/uploads/" + files.visionSectionImage[0].filename : "",
            en: {
                aboutTitle: en.aboutTitle || "",
                aboutText: en.aboutText || "",
                visionTitle: en.visionTitle || "",
            },
            ar: {
                aboutTitle: ar.aboutTitle || "",
                aboutText: ar.aboutText || "",
                visionTitle: ar.visionTitle || "",
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
            const files = req.files;
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}//${host}`;
            const { en, ar } = req.body;

            const updateaboutus = await aboutusmodel.findByIdAndUpdate({_id:req.params.id}, {
                bannerImage: files && files.bannerImage ? url + "/uploads/" + files.bannerImage[0].filename : "",
                aboutSectionImage: files && files.aboutSectionImage ? url + "/uploads/" + files.aboutSectionImage[0].filename : "",
                visionSectionImage: files && files.visionSectionImage ? url + "/uploads/" + files.visionSectionImage[0].filename : "",
                en: {
                    aboutTitle: en.aboutTitle || "", 
                    aboutText: en.aboutText || "",
                    visionTitle: en.visionTitle || "",
                },
                ar: {
                    aboutTitle: ar.aboutTitle || "", 
                    aboutText: ar.aboutText || "",
                    visionTitle: ar.visionTitle || "",
                }
            }, { new: true });

            await updateaboutus.save();

            res.send({ status: true, message: "Aboutus updated successfully", updatedData: updateaboutus });
        } catch (error) {
            console.log(error);
            res.status(500).send({ status: false, message: "Something went wrong!!", error: error.message });
        }
    };
