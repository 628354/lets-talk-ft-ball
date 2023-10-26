const teammodel = require("../model/team")

exports.addTeam = async (req, res) => {
    try {

        const { teamName } = req.body

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const addTeam = await teammodel.create({

            teamName: teamName,
            image: url + "/uploads/" + req.file.filename

        })

        res.send({ status: true, message: "Successfully add team", teamdetails: addTeam })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong!!" })
    }
}

//get teams..........................................................

exports.getTeams = async (req,res)=>{
    try {
        const getTeams = await 

    } catch (error) {
        res.send({status : true , message : "Something went wrong !!"})
    }
}