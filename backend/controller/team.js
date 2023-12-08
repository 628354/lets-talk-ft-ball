
const teammodel = require("../model/team")

exports.createTeam = async (req, res) => {
    try {
        const { teamName, short_name, graph_Title1, graph_Title2, graph_Title3, graph_Title4, description, meta_Tag_Description, meta_Tag_Keywords, team_Tags, leagues, status } = req.body
        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`
        const addTeam = await teammodel.create({
            teamName: teamName,
            short_name: short_name,
            image: req.file ? url + "/uploads/" + req.file.filename : " ",
            graph_Title1: graph_Title1,
            graph_Title2: graph_Title2,
            graph_Title3: graph_Title3,
            graph_Title4: graph_Title4,
            description: description,
            meta_Tag_Description: meta_Tag_Description,
            meta_Tag_Keywords: meta_Tag_Keywords,
            team_Tags: team_Tags,
            leagues: leagues,
            status: status
        })
        res.send({ status: true, message: "Successfully add team", teamdetails: addTeam })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong!!" })
    }
}


exports.getTeams = async (req, res) => {
    try {
        const getTeams = await teammodel.find()
        res.send({ status: true, message: "Successfully get teams", teamdetails: getTeams })
    } catch (error) {
        res.send({ status: true, message: "Something went wrong !!" })
    }
}

exports.teamdetails = async(req, res) => {
    try {
        const teams  = await teammodel.findById({_id:req.params.id})
        if(teams) {
            res.send({status:true, message:'Team details Get Successfully', body:teams})
        } else {
            res.send({status:false, message:'team Id not found'})
        }
        
    } catch (error) {
        console.log(error.message)
    }
}

//update teams...............................................................

exports.updateteams = async (req, res) => {
    try {
        const {id, teamName, short_name, description, meta_Tag_Description,
            meta_Tag_Keywords, team_Tags, leagues, status } = req.body

        const protocol = req.protocol
        const host = req.hostname
        const url = `${protocol}//${host}`

        const updateteam = await teammodel.findByIdAndUpdate({_id:req.params.id}, {
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
        if(updateteam) {
            res.send({ status: true, message: "Successfully update team data", teamdetails: updateteam })
        } 
    } catch (error) {
        console.log(error.message)
    }
},


exports.removeteam = async (req, res) => {
    try {
        const removeteam = await teammodel.findByIdAndDelete({_id:req.params.id})
        if(removeteam) {
            res.send({ status: true, message: "Successfully remove teams", removedetails: removeteam })
        } else {
        res.send({ status: true, message: "Teams Id Not Found", success: false })
        }
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}