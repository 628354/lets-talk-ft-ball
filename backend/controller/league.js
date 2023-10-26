const leaguemodel = require("../model/league")


exports.addleague = async (req, res) => {
    try {
        const { leaguename } = req.body
        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const addleage = await leaguemodel.create({
            leaguename: leaguename,
            image: url + "/uploads/" + req.file.filename
        })

        res.send({ status: true, message: "Successfully add league", leaguedetails: addleage })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong!!" })
    }
}


// get all leagues details............................

exports.getleagues = async (req, res) => {
    try {
        const getleagues = await leaguemodel.find().select({ leaguename: 1, image: 1 })

        res.send({ status: true, message: "Successfully get leaguedetails", leaguedetails: getleagues })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}