
const teammodel = require("../model/team")




exports.getTeams = async (req, res) => {
    try {
        const getTeams = await teammodel.aggregate([
            {
                $lookup: {
                    from: "leagues",
                    localField: "leagues",
                    foreignField: "_id",
                    as: "leagues_details",
                },
            },
            {
                $sort: {
                    createdAt: -1
                }
            },
            
        ])
        res.send({ status: true, message: "Successfully get teams", teamdetails: getTeams })
    } catch (error) {
        res.send({ status: true, message: "Something went wrong !!" })
    }
}


exports.updateteams = async (req, res) => {
    try {
        const { id, teamName, short_name, description, meta_Tag_Description,
            meta_Tag_Keywords, team_Tags, leagues, status } = req.body

        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const updateteam = await teammodel.findByIdAndUpdate({ _id: req.params.id }, {
            teamName: teamName,
            short_name: short_name,
            image: req.file ? url + "/uploads/" + req.file.filename : "",
            description: description,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            team_Tags: team_Tags,
            leagues: leagues,
            status: status
        })
        if (updateteam) {
            res.send({ status: true, message: "Successfully update team data", teamdetails: updateteam })
        }
    } catch (error) {
        console.log(error.message)
    }
}

