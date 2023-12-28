const cafemodel = require("../model/cafe")
const responseHelper = require('../Helpers/Response');
const moment = require('moment')

exports.addcafedata = async (req, res) => {
    try {
        const { details, en, ar } = req.body;
        // const finddata = await cafemodel.findOne({ "en.league_name": en.league_name });
        // if (finddata) {
        //     return res.status(400).json({ status: false, message: "League data already present" });
        // }

        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;
        const date = new Date();

        const adddcafe = await cafemodel.create({
            details: details,
            en: {
                cafecontent: {
                    title: en.cafecontent.title || "",
                    cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                    date: moment(en.cafecontent.date, 'DD-MM-YYYY').toDate(),
                    content: en.cafecontent.content || ""
                }
            },
            ar: {
                cafecontent: {
                    title: ar.cafecontent.title || "",
                    cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                    date: moment(ar.cafecontent.date, 'DD-MM-YYYY').toDate(),
                    content: ar.cafecontent.content || ""
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
        let { lung } = req.params
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}//${host}`;
        const date = new Date();
        const { en, ar } = req.body;

        const finddata = await cafemodel.findById({ _id: req.params.id });
        if (!finddata) {
            res.send({ status: false, message: "Cafe data not found" });
            return;
        }

        const finddataa = await cafemodel.find({
            'cafecontent.title': en && en.cafecontent ? en.cafecontent.title : null
        });

        if (finddataa.length > 0) {
            res.send({ status: false, message: "Title already exists" });
            return;
        }

        const updatedCafeData = await cafemodel.findByIdAndUpdate(
            { _id: req.params.id }, { [lung]: 1 },
            {
                $push: {
                    'en.cafecontent': {
                        title: en && en.cafecontent ? en.cafecontent.title || "" : "",
                        cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                        date: en && en.cafecontent ? moment(en.cafecontent.date, 'DD-MM-YYYY').toDate() : null,
                        content: en && en.cafecontent ? en.cafecontent.content || "" : ""
                    },
                    'ar.cafecontent': {
                        title: ar && ar.cafecontent ? ar.cafecontent.title || "" : "",
                        cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
                        date: ar && ar.cafecontent ? moment(ar.cafecontent.date, 'DD-MM-YYYY').toDate() : null,
                        content: ar && ar.cafecontent ? ar.cafecontent.content || "" : ""
                    }
                }
            },
            { new: true }
        );

        res.send({ status: true, message: "Successfully add cafe content", cafedetails: updatedCafeData });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ status: false, message: "Internal Server Error", error: error.message });
    }
};



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

exports.cafe_details = async (req, res) => {
    try {
        const { lung } = req.params
        const cafe = await cafemodel.findById({ _id: req.params.id }, { [lung]: 1 })
        if (cafe) {
            res.status(200).send({
                body: cafe,
                message: 'Get Cafe By Id Successfully',
                success: true
            })
        } else {
            res.status(300).send({
                message: 'Cafe Id Not Found',
                success: false
            })
        }
    } catch (error) {
        res.status(500).send({
            message: "Enternal server Error",
            success: false,
            error: error.message
        })
    }
}

exports.getAllCafe = async (req, res) => {
    try {
        const { lung } = req.params
        const cafe = await cafemodel.find({}, { [lung]: 1 }).populate({ path: "userId", select: ["userName "] })

        res.status(200).send({
            body: cafe,
            message: 'Get All Cafe Successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: "Enternal server Error",
            success: false,
            error: error.message
        })
    }
}

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