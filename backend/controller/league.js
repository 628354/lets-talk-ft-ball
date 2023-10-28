const league = require("../model/league")
const leaguemodel = require("../model/league")


exports.addleague = async (req, res) => {
    try {
        const { leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
            sort_Order, status } = req.body


        const find = await leaguemodel.findOne({ leaguename: leaguename })

        if (find) {
            res.send({ status: true, message: "league allready present" })
            return
        }

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const addleage = await leaguemodel.create({
            leaguename: leaguename,
            image: url + "/uploads/" + req.file.filename,
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status
        })

        res.send({ status: true, message: "Successfully add league", leaguedetails: addleage })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong!!" })
    }
}


// get all leagues details............................................

exports.getleagues = async (req, res) => {
    try {
        const getleagues = await leaguemodel.find()

        res.send({ status: true, message: "Successfully get leaguedetails", leaguedetails: getleagues })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}

exports.update = async (req, res) => {
    try {


        const { leaguename, description, meta_Tag_Title, meta_Tag_Description, meta_Tag_Keywords, blog_Category,
            sort_Order, status } = req.body

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`


        const findleague = await leaguemodel.findById(req.params.leagueId)

        if (!findleague) {
            res.send({ status: true, message: "league data not found!!" })
            return
        }

        const update = await leaguemodel.findByIdAndUpdate(req.params.leagueId, {
            leaguename: leaguename,
            image: req.file ? url + "/uploads/" + req.file.filename : findleague.image ,
            description: description,
            meta_Tag_Title: meta_Tag_Title,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            blog_Category: blog_Category,
            sort_Order: sort_Order,
            status: status
        }, { new: true })

        await update.save()

        res.send({ status: true, message: "Successfully update details", updatedetails: update })


    } catch (error) {
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