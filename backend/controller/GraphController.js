const leaguedata = require('../model/leaguedata');
const teadData = require('../model/teamdata');
const responseHelper = require('../Helpers/Response')
const teamCatlog = require('../model/teamCatlog')
const mongoose = require('mongoose');
const teamdata = require('../model/teamdata');
const ScrollDown = async (Request, Response) => {

	try {
		const { lung, leagueId } = Request.params;
		const { season } = Request.body;
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` }, { [lung]: 1 }).populate("en.teamname", { [lung]: 1 })
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}

const findByteamName = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { season, leagueId, teamName } = Request.body
		let t = [lung] + ".teamname";
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, [t]: teamName }, { [lung]: 1, datatype: 1, }).populate("en.teamname", { [lung]: 1 });
		console.log(season, leagueId, teamName);
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}

const Goals_Scored = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { season, leagueId } = Request.body;
		let d = [lung] + ".goals_scored";
		const data = await leaguedata.find(
			{ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "gspg" },
			{ datatype: 1, [d]: 1 }
		).populate({
			path: "en.teamname",
			select: [lung, "Image"]
		});
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e);
	}
};
const Goals_Con = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { season, leagueId } = Request.body
		let d = [lung] + ".goals_scored";
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "gcpg" }, { [d]: 1 }).populate({
			path: "en.teamname",
			select: [lung, "Image"]
		});
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}

const gs_gc = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { season, leagueId } = Request.body
		let d = [lung] + ".gs_gc";
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "pl" }, { [d]: 1 }).populate({
			path: "en.teamname",
			select: [lung, "Image"]
		});
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}

const teamSeasson = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId } = Request.body
		let d = [lung] + ".gs_gc";
		const data = await teamdata.find({ "leagueid": `${leagueId}` }, { "season_Title": 1 }).populate("seasonid")
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}


const teamSeassonName = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId, season } = Request.body
		const data = await teamdata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` }, { "season_Title": 1 }).populate("teamname")
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}


const teamSeassonGaneRate = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId, season, teamId } = Request.body
		let gene = [lung] + ".GS_rate"
		let teamDatas = await teamdata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "teamname": `${teamId}` }, { [gene]: 1 })
		let data1 = {}
		const Lueagues = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` });
		Lueagues.map((row) => {
			row[lung].map(async (index) => {
				if (index.teamname == teamId) {
					data1 = index;
				}
			})
		})
		let teamname1 = await teamCatlog.findOne({ "_id": data1.teamname });
		const api = {
			teamDatas, data1, teamname1
		}
		responseHelper[200].data = api
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}


const teamSeassonGC = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId, season, teamId } = Request.body
		let gene = [lung] + ".GC_cum"
		let teamDatas = await teamdata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "teamname": `${teamId}` }, { [gene]: 1 })
		let data1 = {}
		const Lueagues = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` });
		Lueagues.map((row) => {
			row[lung].map(async (index) => {
				if (index.teamname == teamId) {
					data1 = index;
				}
			})
		})
		let teamname1 = await teamCatlog.findOne({ "_id": data1.teamname });
		const api = {
			teamDatas, data1, teamname1
		}
		responseHelper[200].data = api
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}


const teamGS_inG = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId, season, teamId } = Request.body
		let gene = [lung] + ".GS_inG"
		let teamDatas = await teamdata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "teamname": `${teamId}` }, { [gene]: 1 })
		let data1 = {}
		const Lueagues = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` });
		Lueagues.map((row) => {
			row[lung].map(async (index) => {
				if (index.teamname == teamId) {
					data1 = index;
				}
			})
		})
		let teamname1 = await teamCatlog.findOne({ "_id": data1.teamname });
		const api = {
			teamDatas, data1, teamname1
		}
		responseHelper[200].data = api
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}

const teamGS_GC = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { leagueId, season, teamId } = Request.body
		let gene = [lung] + ".GS_GC"
		let teamDatas = await teamdata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "teamname": `${teamId}` }, { [gene]: 1 })
		let data1 = {}
		const Lueagues = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` });
		Lueagues.map((row) => {
			row[lung].map(async (index) => {
				if (index.teamname == teamId) {
					data1 = index;
				}
			})
		})
		let teamname1 = await teamCatlog.findOne({ "_id": data1.teamname });
		const api = {
			teamDatas, data1, teamname1
		}
		responseHelper[200].data = api
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}

// const team_details = async (Request, Response) => {
//     try {
//         const { lung, teamNameId } = Request.params; 
//         const data = await leaguedata.find(
//             {
//                 $or: [
//                     { [`${lung}.teamname._id`]: teamNameId },
//                     { "ar.teamname._id": teamNameId },
//                     { "en.teamname._id": teamNameId }
//                 ]
//             },
//             { [lung]: 1, datatype: 1 }
//         ).populate("en.teamname", { [lung]: 1 });

//         responseHelper[200].data = data;
//         Response.send(responseHelper[200]);
//     } catch (e) {
//         sendError(Response, e);
//     }
// };

const team_details = async (req, res) => {
	try {
		const { lung } = req.params;
		const { teamId } = req.body;
		const data = await teamCatlog.findOne({ "_id": teamId }).populate('leagueid', { [lung]: 1 });
		if (data) {
			res.status(200).send({
				body: data,
				message: 'Get Team By ID Successfully',
				success: true
			});
		} else {
			res.status(404).send({
				message: 'Team ID Not Found',
				success: false
			});
		}
	} catch (error) {
		console.log(error.message);
		res.status(500).send({
			message: 'Internal Server Error',
			success: false,
			error: error.message
		});
	}
};
const sendError = (Response, Error) => {
	if (Error.errno === 500) {
		responseHelper[500].data = [];
		Response.send(responseHelper[500]);
	} else {
		const errorObj = {};
		errorObj.status = Error.errno;
		errorObj.message = Error.sqlMessage ? Error.sqlMessage : Error.code;
		errorObj.hasError = true;
		errorObj.data = Error.sql;
		Response.send(errorObj);
	}
}


module.exports = {
	ScrollDown, findByteamName, Goals_Scored, Goals_Con, gs_gc, teamGS_inG, teamGS_GC, team_details, teamSeasson, teamSeassonName, teamSeassonGaneRate, teamSeassonGC
}
