const leaguemodel = require("../model/league")
const path = require("path");
const mongoose = require('mongoose');
const Helpers = require('../Helpers/Helpers')
const responseHelper = require('../Helpers/Response');




exports.addleague = async (req, res) => {
    try {
        const {
            teamId,
            sessionId,
            leaguedataId,
            leaguename,
            description,
            meta_Tag_Title,
            meta_Tag_Description,
            meta_Tag_Keywords,
            blog_Category,
            sort_Order,
            status
        } = req.body;

        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;

        const find = await leaguemodel.findOne({ leaguename: leaguename });
        if (!find) {
            res.status(400).send({ status: false, message: "League already present" });
            return;
        }

        const addLeague = await leaguemodel.create({
            sessionId: sessionId,
            image: req.file ? url + "/uploads/" + req.file.filename : " ",
            en: {
                leaguename: leaguename,
                description: description,
                meta_Tag_Title: meta_Tag_Title,
                meta_Tag_Description: meta_Tag_Description,
                meta_Tag_Keywords: meta_Tag_Keywords,
                blog_Category: blog_Category,
                sort_Order: sort_Order,
                status: status
            },
            ar: {
                leaguename: leaguename,
                description: description,
                meta_Tag_Title: meta_Tag_Title,
                meta_Tag_Description: meta_Tag_Description,
                meta_Tag_Keywords: meta_Tag_Keywords,
                blog_Category: blog_Category,
                sort_Order: sort_Order,
                status: status
            }
        })
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



// get all leagues details............................................

exports.getleagues = async (Request, Response) => {
    const { lung } = Request.params;
    const getleagues = await leaguemodel.find({}, { [lung]: 1 })
    responseHelper[200].data = getleagues;
    Response.send(responseHelper[200]);
},

    exports.update = async (req, res) => {
        try {

            const { leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
                sort_Order, status } = req.body
            const protocol = req.protocol
            const host = req.hostname
            const url = `${protocol}//${host}`

            const findleague = await leaguemodel.findById(req.params.leagueId)
            if (!findleague) {
                res.send({ status: true, message: "league data not found!!" })
                return
            }

            const update = await leaguemodel.findByIdAndUpdate(req.params.leagueId, {
                image: req.file ? url + "/uploads/" + req.file.filename : "",
                en: {
                    leaguename:leaguename,
                    description: description,
                    meta_Tag_Title: meta_Tag_Title,
                    meta_Tag_Description: meta_Tag_Description,
                    meta_Tag_Keywords: meta_Tag_Keywords,
                    blog_Category: blog_Category,
                    sort_Order: sort_Order,
                    status: status
                },
                ar: {
                    leaguename:leaguename,
                    description: description,
                    meta_Tag_Title: meta_Tag_Title,
                    meta_Tag_Description: meta_Tag_Description,
                    meta_Tag_Keywords: meta_Tag_Keywords,
                    blog_Category: blog_Category,
                    sort_Order: sort_Order,
                    status: status
                }

            }, { new: true })

            await update.save()
            res.send({ status: true, message: "Successfully Update Details", updatedetails: update })
        } catch (error) {
            console.log(error)
            res.send({ status: false, message: "Something went wrong !!" })
        }
    }

//delete data .........................................

exports.delete = async (req, res) => {
    try {
        const remove = await leaguemodel.findByIdAndDelete(req.params.leagueId)
        res.send({ status: true, message: "Successfully remove leaguedata", removedetails: remove })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.getleagusById = async (Request, Response) => {
    const { lung } = Request.params;
    const league = await leaguemodel.findById({ _id: Request.params.id }, { _id: 1, seasonid: 1, datatype: 1, leagueid: 1, [lung]: 1 }); responseHelper[200].data = league;
    Response.send(responseHelper[200]);
}
