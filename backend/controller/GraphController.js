const leaguedata = require('../model/leaguedata');
const teadData = require('../model/teamdata');
const responseHelper = require('../Helpers/Response')


const ScrollDown = async (Request, Response) => {
	try {
		const { leagueId } = Request.params;
		const { season } = Request.body;
		console.log(leagueId, season);
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` });
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}
}


const findByteamName = async (Request, Response) => {
	try {
		const { season, leagueId, teamName } = Request.body

		console.log(season, leagueId, teamName);
		const data = await leaguedata.aggregate([
			{
				$unwind: "$getData"
			},
			{
				$match: {
					leagueid: leagueId,
					seasonid: season,
					"getData.teamname": `${teamName}`
				}
			},
			{
				$project: {
					_id: 1,
					seasonid: 1,
					leagueid: 1,
					datatype: 1,
					getData: {
						$cond: [
							{ $eq: ["$getData.teamname", `${teamName}`] },
							"$getData",
							"$$REMOVE"
						]
					}
				}
			}
		])
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}
const Goals_Scored = async (Request, Response) => {
	try {
		const { season, leagueId } = Request.body
		const data = await leaguedata.aggregate([
			{
				$unwind: "$getData"
			},
			{
				$match: {
					"datatype":"gspg",
					leagueid: leagueId,
					seasonid: season
				}
			},
			{
				$project: {
					_id: 1,
					seasonid: 1,
					leagueid: 1,
					datatype: 1,
					"getData.teamname": 1,
					"getData.goals_scored": 1
				}
			}
		])
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}
const Goals_Con = async (Request, Response) => {
	try {
		const { season, leagueId } = Request.body
		const data = await leaguedata.aggregate([
			{
				$unwind: "$getData"
			},
			{
				$match: {
					"datatype":"gcpg",
					leagueid: leagueId,
					seasonid: season
				}
			},
			{
				$project: {
					_id: 1,
					seasonid: 1,
					leagueid: 1,
					datatype: 1,
					"getData.teamname": 1,
					"getData.goals_conceded": 1
				}
			}
		])
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}
const gs_gc = async (Request, Response) => {
	try {
		const { season, leagueId } = Request.body
		const data = await leaguedata.aggregate([
			{
				$unwind: "$getData"
			},
			{
				$match: {
					"datatype":"pl",
					leagueid: leagueId,
					seasonid: season
				}
			},
			{
				$project: {
					_id: 1,
					seasonid: 1,
					leagueid: 1,
					datatype: 1,
					"getData.teamname": 1,
					"getData.gs_gc": 1
				}
			}
		])
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}


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
	ScrollDown, findByteamName, Goals_Scored, Goals_Con, gs_gc
}