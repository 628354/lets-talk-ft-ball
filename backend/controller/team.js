const teammodel = require("../model/team")


exports.addTeam = async (req, res) => {
    try {
        const {
            teamName,
            short_name,
            graph_Title1,
            graph_Title2,
            graph_Title3,
            graph_Title4,
            description,
            meta_Tag_Description,
            meta_Tag_Keywords,
            team_Tags,
            leagues,
            status
        } = req.body;

        const protocol = req.protocol;
        const host = req.hostname;
        const url = `${protocol}://${host}`;

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
        });

        res.send({
            teamdetails: addTeam,
            status: true,
            message: "Successfully add team",
           
        });
    } catch (error) {
        res.send({
            status: false,
            message: "Something went wrong!!"
        });
    }
};



//get teams..........................................................

exports.getTeams = async (req, res) => {
    try {
        const getTeams = await teammodel.find().populate("leagues")
        res.send({ status: true, message: "Successfully get teams", teamdetails: getTeams })
    } catch (error) {
        res.send({ status: true, message: "Something went wrong !!" })
    }
}

exports.teamdetails = async(req, res) => {
    try {
        const getTeams = await teammodel.findById({_id:req.params.id})
        if(getTeams) {
            res.send({status:true, message:"Team Details Get Successfully",teamdetails:getTeams })
        } else {
            res.send({message:'Team Id not Found'})
        }
    } catch (error) {
        res.send({status:true, message:"Something went wrong"})
    }
}

//update teams...............................................................

exports.updateteams = async (req, res) => {
    try {
        const { teamName, short_name, graph_Title1, graph_Title2, graph_Title3, graph_Title4, description, meta_Tag_Description,
            meta_Tag_Keywords, team_Tags, leagues, status } = req.body

        const findteam = await teammodel.findById(req.params.teamId)
        if (!findteam) {
            res.send({ status: false, message: "Team not found" })
            return
        }

        const protocol = req.protocol
        const host = req.host
        const url = `${protocol}//${host}`

        const updateteam = await teammodel.findByIdAndUpdate(req.params.teamId, {

            teamName: teamName,
            short_name: short_name,
            image: req.file ? url + "/uploads/" + req.file.filename : findteam.image,
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
        }, { new: true })

        await updateteam.save()
        res.send({ status: true, message: "Successfully update team data", teamdetails: updateteam })

    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}


exports.removeteam = async (req, res) => {
    try {
        const removeteam = await teammodel.findByIdAndDelete(req.params.teamId)
        res.send({ status: true, message: "Successfully remove teams", removedetails: removeteam })
    } catch (error) {
        res.send({ status: false, message: "Something went wrong !!" })
    }
}