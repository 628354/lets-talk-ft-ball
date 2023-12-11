const leaguedata = require('../model/leaguedata');
const teadData = require('../model/teamdata');
const responseHelper = require('../Helpers/Response')
const teamCatlog = require('../model/teamCatlog')
const mongoose = require('mongoose');
const ScrollDown = async (Request, Response) => {
	try {
		const { lung, leagueId } = Request.params;
		const { season } = Request.body;
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}` }, { [lung]: 1 }).populate("en.teamname", { [lung]: 1 });
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
		const { season, leagueId } = Request.body
		let d = [lung] + ".goals_scored";
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "gspg" }, { datatype: 1, [d]: 1 }).populate("en.teamname", { [lung]: 1 });
		responseHelper[200].data = data;
		Response.send(responseHelper[200]);
	} catch (e) {
		sendError(Response, e)
	}

}
const Goals_Con = async (Request, Response) => {
	try {
		const { lung } = Request.params;
		const { season, leagueId } = Request.body
		let d = [lung] + ".goals_scored";
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "gcpg" }, { [d]: 1 }).populate("en.teamname", { [lung]: 1 });

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
		const data = await leaguedata.find({ "leagueid": `${leagueId}`, "seasonid": `${season}`, "datatype": "pl" }, { [d]: 1 }).populate("en.teamname", { [lung]: 1 });

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