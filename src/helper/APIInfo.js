/** @format */

const SERVER_LINK =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/";
// const SERVER_LINK = "http://localhost:5000/";
// const SERVER_IMAGES = "http://localhost:5000";
const SERVER_IMAGES =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/"
export const REQUEST_TYPE = {
	GET: "GET",
	POST: "POST",
};
export const IMAGES = {
	imgs: SERVER_IMAGES + "/uploads/",
};

export const LEAGUES_BULK_IMPORT = {
	upload: `${SERVER_LINK}leageBluk`,
};

export const TEAM_BULK_IMPORT = {
	upload: `${SERVER_LINK}teadBulk`,
};

export const SESSION = {
	year: `${SERVER_LINK}getyears`,
};

export const LEAGUES = {
	league: `${SERVER_LINK}getleagues`,
};

export const CATLOGS = {
	upload: `${SERVER_LINK}uploadCatLog`,
};
export const TEAM = {
	find: `${SERVER_LINK}en/teamname/find`,
};
export const GS = {
	find: `${SERVER_LINK}en/goals-scored/find`,
};
export const GC = {
	find: `${SERVER_LINK}en/goals-con/find`,
};
export const GS_GC = {
	find: `${SERVER_LINK}en/gs-gc/find`,
};
