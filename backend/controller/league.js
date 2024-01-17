const leaguemodel = require("../model/league")
const path = require("path");
const mongoose = require('mongoose');
const Helpers = require('../Helpers/Helpers')
const responseHelper = require('../Helpers/Response');

exports.addleague = async (req, res) => {
    try {
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;
        const { image, en, ar } = req.body;

        const find = await leaguemodel.findOne({ "en.leaguename": en.leaguename });
        if (find) {
            return res.status(400).send('League already present');
        }
        const addLeague = await leaguemodel.create({
            image: image,
            en: {
                leaguename: en.leaguename || '',
                description: en.description || '',
                meta_Tag_Title: en.meta_Tag_Title || '',
                meta_Tag_Description: en.meta_Tag_Description || '',
                meta_Tag_Keywords: en.meta_Tag_Keywords || '',
                blog_Category: en.blog_Category || "",
                sort_Order: en.sort_Order || "",
                status: en.status || "active"
            },
            ar: {
                leaguename: ar.leaguename || '',
                description: ar.description || '',
                meta_Tag_Title: ar.meta_Tag_Title || '',
                meta_Tag_Description: ar.meta_Tag_Description || '',
                meta_Tag_Keywords: ar.meta_Tag_Keywords || '',
                blog_Category: ar.blog_Category || "",
                sort_Order: ar.sort_Order || "",
                status: ar.status || "active"
            }
        });
        const result = await addLeague.save();
        res.status(200).send({
            body: result,
            message: 'League Added Successfully',
            success: true
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
};


exports.getleagues = async (req, res) => {
    try {
        const { lung } = req.params
        const getleagues = await leaguemodel.find({}, { [lung]: 1, image: 1 })
        res.status(200).send({
            body: getleagues,
            message: 'Get Leagues Successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
}
exports.getleagusById = async (req, res) => {
    try {
        let { lung } = req.params
        const league = await leaguemodel.findById({ _id: req.params.id }, { [lung]: 1, image: 1 })
        if (league) {
            res.status(200).send({
                body: league,
                message: 'Get Leagues By Id Successfully',
                success: true
            })
        } else {
            res.status(300).send({
                message: 'Leagues Id Not Found',
                success: false
            })
        }
    } catch (error) {
        res.status(300).send({
            message: 'Leagues Id Not Found',
            success: false
        });
    }
}
exports.update = async (req, res) => {
    try {
        const files = req.files;
        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}//${host}`;
        const { image, en, ar } = req.body;

        const findleague = await leaguemodel.findById(req.params.id);
        if (!findleague) {
            res.send({ status: true, message: "League data not found!!" });
            return;
        }

        const update = await leaguemodel.findByIdAndUpdate({ _id: req.params.id },
            {
                image: image,
                en: {
                    leaguename: en.leaguename || "",
                    description: en.description || "",
                    meta_Tag_Title: en.meta_Tag_Title || "",
                    meta_Tag_Description: en.meta_Tag_Description || "",
                    meta_Tag_Keywords: en.meta_Tag_Keywords || "",
                    blog_Category: en.blog_Category || "",
                    sort_Order: en.sort_Order || "",
                    status: en.status || "active"
                },
                ar: {
                    leaguename: ar.leaguename || "",
                    description: ar.description || "",
                    meta_Tag_Title: ar.meta_Tag_Title || "",
                    meta_Tag_Description: ar.meta_Tag_Description || "",
                    meta_Tag_Keywords: ar.meta_Tag_Keywords || "",
                    blog_Category: ar.blog_Category || "",
                    sort_Order: ar.sort_Order || "",
                    status: ar.status || "active"
                }
            },
            { new: true }
        );

        if (update) {
            res.status(200).send({
                body: update,
                message: 'Leagues Updated Successfully',
                success: true
            });
        } else {
            res.status(300).send({
                message: 'Leagues Id Not Found',
                success: false
            });
        }
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        });
    }
};
exports.delete = async (req, res) => {
    try {
        const remove = await leaguemodel.findByIdAndDelete({ _id: req.params.id })
        if (remove) {
            res.status(200).send({
                body: remove,
                message: 'Leagues Deleted Successfully',
                success: true
            })
        } else {
            res.status(300).send({
                message: 'Leagues Id Not Found',
                success: false
            })
        }
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}
exports.updateleagueStatus = async (req, res) => {
    try {
        const { en, ar } = req.body
        const updateLeague = await leaguemodel.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    "en.status": (en && en.status) || "inactive",
                    "ar.status": (ar && ar.status) || "inactive",
                    is_Deleted: true
                }
            },
            { new: true, lean: true }
        );

        if (!updateLeague) {
            return res.status(404).send({
                message: 'Status not found',
                success: false
            });
        }

        res.status(200).send({
            body: updateLeague,
            message: 'Status Updated successfully',
            success: true
        });
    } catch (error) {
        res.status(200).send({
            message: "Enternal Server Error",
            success: false,
            error: error.message
        })
    }
}