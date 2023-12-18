const leaguemodel = require("../model/league")
const path = require("path");
const mongoose = require('mongoose');
const Helpers = require('../Helpers/Helpers')


exports.addleague = async (req, res) => {
    try {
        const { teamId, sessionId, leaguedataId, leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
            sort_Order, status } = req.body
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const find = await leaguemodel.findOne({ leaguename: leaguename });
        if (find) {
            res.send({ status: true, message: "league already present" });
            return;
        }

        const addleage = await leaguemodel.create({
            leaguedataId: leaguedataId,
            teamId: teamId,
            sessionId: sessionId,
            image: req.file ? url + "/uploads/" + req.file.filename : " ",
            leaguename: leaguename,
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status

        })
        const result = await addleage.save()
        res.status(200).send({
            body: result,
            message: 'League Add Successfully',
            success: true
        })
    } catch (error) {
        res.status(500).send({
            message: 'Enternal Server Error',
            success: false,
            error: error.message
        })
    }
}


// get all leagues details............................................

exports.getleagues = async (req, res) => {
    try {
        const getleagues = await leaguemodel.find().populate("leaguedataId")
            .populate("teamId")
            .populate('sessionId')
            .sort({ createdAt: -1 })
        res.send({ status: true, message: "Successfully get leaguedetails", leaguedetails: getleagues })
    } catch (error) {
        console.log(error.message)
    }
}



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
            leaguename: leaguename,
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status
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


exports.getleagusById = async (req, res) => {
    try {
        const league = await leaguemodel.findById({ _id: req.params.id })
        if (league) {
            res.send({ status: true, message: 'league details Get Successfully', body: league })
        } else {
            res.send({ status: false, message: 'league Id not found' })
        }
    } catch (error) {
        console.log(error.message)
    }
}
