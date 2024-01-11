const cafemodel = require("../model/cafe");
const responseHelper = require("../Helpers/Response");
const moment = require("moment");

//add data in  cafe leagues .....................................................

// exports.addcafeleaguesdata = async (req, res) => {
//     try {
//         let { lung } = req.params
//         const protocol = req.protocol;
//         const host = req.hostname;
//         const url = `${protocol}//${host}`;
//         const date = new Date();
//         const { en, ar } = req.body;

//         const finddata = await cafemodel.findById({ _id: req.params.id });
//         if (!finddata) {
//             res.send({ status: false, message: "Cafe data not found" });
//             return;
//         }

//         const finddataa = await cafemodel.find({
//             'cafecontent.title': en && en.cafecontent ? en.cafecontent.title : null
//         });

//         if (finddataa.length > 0) {
//             res.send({ status: false, message: "Title already exists" });
//             return;
//         }

//         const updatedCafeData = await cafemodel.findByIdAndUpdate(
//             { _id: req.params.id }, { [lung]: 1 },
//             {
//                 $push: {
//                     'en.cafecontent': {
//                         title: en && en.cafecontent ? en.cafecontent.title || "" : "",
//                         cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
//                         date: en && en.cafecontent ? moment(en.cafecontent.date, 'DD-MM-YYYY').toDate() : null,
//                         content: en && en.cafecontent ? en.cafecontent.content || "" : ""
//                     },
//                     'ar.cafecontent': {
//                         title: ar && ar.cafecontent ? ar.cafecontent.title || "" : "",
//                         cafe_image: req.files && req.files.cafe_image ? url + "/uploads/" + req.files.cafe_image[0].filename : "",
//                         date: ar && ar.cafecontent ? moment(ar.cafecontent.date, 'DD-MM-YYYY').toDate() : null,
//                         content: ar && ar.cafecontent ? ar.cafecontent.content || "" : ""
//                     }
//                 }
//             },
//             { new: true }
//         );

//         res.send({ status: true, message: "Successfully add cafe content", cafedetails: updatedCafeData });
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ status: false, message: "Internal Server Error", error: error.message });
//     }
// };

// exports.updateCafe = async (req, res) => {
//     try {
//         const files = req.files;
//         const protocol = req.protocol;
//         const host = req.hostname;
//         const url = `${protocol}//${host}`;
//         const { en, ar } = req.body;

//         const cafe = await cafemodel.findByIdAndUpdate(
//             { _id: req.params.id },
//             {
//                 en: {
//                     cafecontent: {
//                         title: en.cafecontent.title || "",
//                         date: en.cafecontent.date || "",
//                         content: en.cafecontent.content || "",
//                     },
//                 },
//                 ar: {
//                     cafecontent: {
//                         title: ar.cafecontent.title || "",
//                         date: ar.cafecontent.date || "",
//                         content: ar.cafecontent.content || "",
//                     },
//                 },
//             },
//             { new: true }
//         );

//         res.send({ status: true, message: "Cafe data Updated Successfully", cafedetails: cafe });
//     } catch (error) {
//         res.status(500).send({ status: false, message: "Internal Server Error", error: error.message });
//     }
// };

// exports.updatecafecontent = async (req, res) => {
//     try {

//         const { title, content } = req.body
//         const { cafe_id, content_id } = req.params
//         const finddata = await cafemodel.findById(cafe_id)
//         if (!finddata) {
//             res.send({ status: false, message: "cafe data not found" })
//             return
//         }

//         const updatedata = await cafemodel.findOneAndUpdate({ _id: cafe_id, "cafecontent._id": content_id }, {
//             en: {
//                 $set: {
//                     "cafecontent.title": title,
//                     "cafecontent.content": content
//                 }
//             },
//             ar: {
//                 $set: {
//                     "cafecontent.title": title,
//                     "cafecontent.content": content
//                 }
//             }

//         }, { new: true })

//         await updatedata.save()
//         res.send({ status: true, message: "Successfully update data", cafedetails: updatedata })
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// exports.cafe_details = async (req, res) => {
//     try {
//         const { lung } = req.params
//         const cafe = await cafemodel.findById({ _id: req.params.id }, { [lung]: 1 })
//         if (cafe) {
//             res.status(200).send({
//                 body: cafe,
//                 message: 'Get Cafe By Id Successfully',
//                 success: true
//             })
//         } else {
//             res.status(300).send({
//                 message: 'Cafe Id Not Found',
//                 success: false
//             })
//         }
//     } catch (error) {
//         res.status(500).send({
//             message: "Enternal server Error",
//             success: false,
//             error: error.message
//         })
//     }
// }

// exports.getAllCafe = async (req, res) => {
//     try {
//         const { lung } = req.params
//         const cafe = await cafemodel.find({}, { [lung]: 1 })
//         res.status(200).send({
//             body: cafe,
//             message: 'Get All Cafe Successfully',
//             success: true
//         })
//     } catch (error) {
//         res.status(500).send({
//             message: "Enternal server Error",
//             success: false,
//             error: error.message
//         })
//     }
// }

// exports.deleteCafe = async (req, res) => {
//     try {
//         const deleteCaf = await cafemodel.findByIdAndDelete({ _id: req.params.id })
//         if (deleteCaf) {
//             res.send(200).send({
//                 body: deleteCaf,
//                 message: 'Cafe Deleted Successfully',
//                 success: true
//             })
//         } else {
//             res.send(300).send({
//                 message: 'Cafe Id Not Found',
//                 success: false
//             })
//         }
//     } catch (error) {
//         console.log(error.message)
//     }
// }

module.exports = {
    addcafedata: async (req, res) => {
        try {
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}://${host}`;
            const { logo, cafe_image, en, ar } = req.body;

            const AddCafe = new cafemodel({
                // cafe_image: cafe_image ? `${url}/uploads/${cafe_image}` : "",
                // logo: logo ? `${url}/uploads/${logo}` : "",
                logo: logo,
                cafe_image: cafe_image,
                en: {
                    details: en.details || "",
                    title: en.title || "",
                    date: en.date || "",
                    content: en.content || "",
                },
                ar: {
                    details: ar.details || "",
                    title: ar.title || "",
                    date: ar.date || "",
                    content: ar.content || "",
                },
            });

            const result = await AddCafe.save();
            res.status(200).send({
                body: result,
                message: " Cafe  Added Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
                error: error.message,
            });
        }
    },
    updateCafe: async (req, res) => {
        try {
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}://${host}`;
            const { logo, cafe_image, en, ar } = req.body;

            const update = await cafemodel.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    logo: logo,
                    cafe_image: cafe_image,
                    // cafe_image: cafe_image ? `${url}/uploads/${cafe_image}` : "",
                    // logo: logo ? `${url}/uploads/${logo}` : "",
                    en: {
                        details: en.details || "",
                        title: en.title || "",
                        date: en.date || "",
                        content: en.content || "",
                    },
                    ar: {
                        details: ar.details || "",
                        title: ar.title || "",
                        date: ar.date || "",
                        content: ar.content || "",
                    },
                }
            );
            if (update) {
                res.status(200).send({
                    body: update,
                    message: "Cafe Updated Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    mesasge: "Cafe Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge,
            });
        }
    },
    getAllCafe: async (req, res) => {
        try {
            const { lung } = req.params;
            const getAll = await cafemodel.find(
                {},
                { [lung]: 1, logo: 1, cafe_image: 1 }
            );
            res.status(200).send({
                body: getAll,
                message: "Get All Cafe Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Enternal Server Error",
                success: false,
                error: error.message,
            });
        }
    },
    cafe_details: async (req, res) => {
        try {
            const { lung } = req.params;
            const cafes = await cafemodel.findById(
                { _id: req.params.id },
                { [lung]: 1 }
            );
            if (cafes) {
                res.status(200).send({
                    body: cafes,
                    mesasge: " Cafe details successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    mesasge: "Cafe Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge,
            });
        }
    },
    deleteCafe: async (req, res) => {
        try {
            const cafes = await cafemodel.findByIdAndDelete({ _id: req.params.id });
            if (cafes) {
                res.status(200).send({
                    body: cafes,
                    mesasge: "Cafe Deleted Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Enternal Server Error",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                mesasge: "Enternal Server Error",
                success: false,
                error: error.mesasge,
            });
        }
    },
};
