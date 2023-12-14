/** @format */

const SERVER_LINK =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/";
const SERVER_IMAGES =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/"
// const SERVER_LINK = "http://localhost:5000/";
// const SERVER_IMAGES = "http://localhost:5000/";

export const REQUEST_TYPE = {
	GET: "GET",
	POST: "POST",
	PUT:"PUT"
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
export const FIND_TEAM = {
	find: `${SERVER_LINK}en/scrolldown/find`,
};
export const GET_TEAM_ID = {
	find: `${SERVER_LINK}getleagusById`,
};
export const SESSIOND = {
	year: `${SERVER_LINK}getyears`,
	LatestYears: `${SERVER_LINK}getLatestYears`,
  };
  export const ADD_LEAGUES = {
	league: `${SERVER_LINK}addleague`,
	
  };
  export const ADD_SEASON = {
	season: `${SERVER_LINK}addseasonyear`,
	
  };
  export const GET_SEASON_BY_ID = {
	getseasonById: `${SERVER_LINK}getseasonById`,
	
  };
  export const UPDATE_SEASON_YEAR = {
	updateSeason: `${SERVER_LINK}updateSeasonyear`,
	
  };
  export const GET_LEAGUE_BY_ID = {
	getLeague: `${SERVER_LINK}getleagusById`,
	
  };
  export const UPDATE_LEAGUE = {
	upDate: `${SERVER_LINK}updateLeague`,
	
  };
  export const TEAM_DETAILS = {
	details: `${SERVER_LINK}en/team_details`,
	
  };


