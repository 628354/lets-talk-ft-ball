const cafemodel = require("../model/cafe")
const responseHelper = require('../Helpers/Response');

exports.addcafedata = async (req, res) => {
    try {
        const { details, title, content, league_name } = req.body;

        const finddata = await cafemodel.findOne({ league_name: league_name });
        if (finddata) {
            return res.status(400).json({ status: false, message: "League data already present" });
        }

        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;
        const date = new Date();

        const adddcafe = await cafemodel.create({
            en: {
                details: details,
                league_name: league_name,
                cafecontent: {
                    title: title,
                    cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                    date: date,
                    content: content
                }
            },
            ar: {
                details: details,
                league_name: league_name,
                cafecontent: {
                    title: title,
                    cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                    date: date,
                    content: content
                }
            }

        });

        if (adddcafe) {
            return res.status(200).json({ status: true, message: "Cafe details added successfully!!", cafedetails: adddcafe });
        } else {
            return res.status(500).json({ status: false, message: "Failed to add cafe details" });
        }

    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, message: "Internal Server Error", error: error.message });
    }
};


//add data in  cafe leagues .....................................................

exports.addcafeleaguesdata = async (req, res) => {
    try {
        const { title, content } = req.body
        const { cafe_id } = req.params

        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const date = new Date()
        const finddata = await cafemodel.findById(cafe_id)
        if (!finddata) {
            res.send({ status: false, message: "cafe data not found" })
            return
        }

        const finddataa = await cafemodel.find({
            'cafecontent': {
                $elemMatch: { 'title': title }
            }
        })

        if (finddataa.length > 0) {
            res.send({ status: false, message: "title allready exist" })
            return
        }

        const findAndAddData = await cafemodel.findByIdAndUpdate({ _id: cafe_id }, {
            en: {
                $push: {
                    cafecontent: {
                        title: title,
                        cafe_image: req.file ? url + "/uploads/" + req.file.filename : "",
                        date: date,
                        content: content
                    }
                },
                cafecontent: {
                    title: title,
                    cafe_image: req.file ? url + "/uploads/" + req.file.filename : "",
                    date: date,
                    content: content
                }

            },
            ar: {
                $push: {

                    cafecontent: {
                        title: title,
                        cafe_image: req.file ? url + "/uploads/" + req.file.filename : "",
                        date: date,
                        content: content
                    },

                    cafecontent: {
                        title: title,
                        cafe_image: req.file ? url + "/uploads/" + req.file.filename : "",
                        date: date,
                        content: content
                    }


                }
            }

        }, { new: true })
        await findAndAddData.save()
        res.send({ status: true, message: "Successfully add cafe content", cafedetails: findAndAddData })
    } catch (error) {
        console.log(error.message)
    }
}

exports.updatecafecontent = async (req, res) => {
    try {

        const { title, content } = req.body
        const { cafe_id, content_id } = req.params
        const finddata = await cafemodel.findById(cafe_id)
        if (!finddata) {
            res.send({ status: false, message: "cafe data not found" })
            return
        }

        const updatedata = await cafemodel.findOneAndUpdate({ _id: cafe_id, "cafecontent._id": content_id }, {
            en: {
                $set: {
                    "cafecontent.title": title,
                    "cafecontent.content": content
                }
            },
            ar: {
                $set: {
                    "cafecontent.title": title,
                    "cafecontent.content": content
                }
            }

        }, { new: true })

        await updatedata.save()
        res.send({ status: true, message: "Successfully update data", cafedetails: updatedata })
    } catch (error) {
        console.log(error.message)
    }
}
exports.cafe_details = async (Request, Response) => {
    const { lung } = Request.params;
    const cafe = await cafemodel.findById({ _id: Request.params.id }, { _id: 1, seasonid: 1, datatype: 1, leagueid: 1, [lung]: 1 }); responseHelper[200].data = cafe;
    Response.send(responseHelper[200]);
}

exports.getAllCafe = async (Request, Response) => {
    const { lung } = Request.params;
    const cafe = await cafemodel.find({}, { [lung]: 1 })
    responseHelper[200].data = cafe;
    Response.send(responseHelper[200]);
},

    exports.deleteCafe = async (req, res) => {
        try {
            const deleteCaf = await cafemodel.findByIdAndDelete({ _id: req.params.id })
            if (deleteCaf) {
                res.send(200).send({
                    body: deleteCaf,
                    message: 'Cafe Deleted Successfully',
                    success: true
                })
            } else {
                res.send(300).send({
                    message: 'Cafe Id Not Found',
                    success: false
                })
            }
        } catch (error) {
            console.log(error.message)
        }
    }