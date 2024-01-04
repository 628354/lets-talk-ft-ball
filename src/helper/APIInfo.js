/** @format */

import Cookies from "js-cookie";

const SERVER_LINK =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/";
const SERVER_IMAGES =	"https://phpstack-1140615-3967632.cloudwaysapps.com/backend/"
// const SERVER_LINK = "http://localhost:5000/";
// const SERVER_IMAGES = "http://localhost:5000/";
 const lang = Cookies.get('language')
 console.log(lang);
export const REQUEST_TYPE = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  PATCH:"PATCH",
  DELETE:"DELETE"
 
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

// export const LEAGUES = {
//   league: `${SERVER_LINK}en/getleagues`,
//   leaguear: `${SERVER_LINK}ar/getleagues`,
// };
export const LEAGUES=(lang)=>{
  return {
    league:`${SERVER_LINK}${lang}/getleagues`
  }
}


export const CATLOGS = {
  upload: `${SERVER_LINK}uploadCatLog`,
};
export const TEAM = {
  find: `${SERVER_LINK}en/teamname/find`,
};
// export const GS = {
//   find: `${SERVER_LINK}en/goals-scored/find`,
// };
export const GS=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/goals-scored/find`
  }
}
export const GC=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/goals-con/find`
  }
}


export const GS_GC=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/gs-gc/find`
  }
}
// export const FIND_TEAM = {
//   find: `${SERVER_LINK}en/scrolldown/find`,
// };

// export const GET_LEAGUE_ID = {
//   finden: `${SERVER_LINK}en/getleagusById`,
//   findar: `${SERVER_LINK}ar/getleagusById`,
// };
export const GET_LEAGUE_ID=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/getleagusById`
  }
}
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
  getLeague: `${SERVER_LINK}en/getleagusById`,
  getLeaguear: `${SERVER_LINK}ar/getleagusById`,

};
export const UPDATE_LEAGUE = {
  upDate: `${SERVER_LINK}updateLeague`,

};
export const TEAM_DETAILS = {
  details: `${SERVER_LINK}en/team_details`,

};
export const ADD_IMAGE = {
  image: `${SERVER_LINK}addImage`,

};
export const GET_USER_BY_ID = {
  user: `${SERVER_LINK}GetUserById`,

};
export const UPDATE_USER = {
  updateuser: `${SERVER_LINK}updateUser`,

};
export const GAINING_RATE = {
  gainrate: `${SERVER_LINK}en/teamSeassonGaneRate/find`,

};


export const FIND_ALL = {
  find: `${SERVER_LINK}en/findAll`,

};

// export const GET_ALL_LEAGUE = {
//   find: `${SERVER_LINK}getleagues`,

// };
export const ALL_SEASON = {
  find: `${SERVER_LINK}en/teamSeasson/find`,

};
// export const TEAM_NAME = {
//   find: `${SERVER_LINK}en/teamSeassonName/find`,

// };
export const TEAM_NAME=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/teamSeassonName/find`
  }
}
export const TEAM_SEA_GC = {
  find: `${SERVER_LINK}en/teamSeassonGC/find`,

};

export const TEAM_GS_GC = {
  find: `${SERVER_LINK}en/teamGS_GC/find`,

};

export const TEAM_GS_IN_G = {
  find: `${SERVER_LINK}en/teamGS_inG/find`,

};
export const CONTACT_FORM = {
  find: `${SERVER_LINK}sendcontactusToadmin`,

};
export const ABOUT_US = {
  finden: `${SERVER_LINK}en/getaboutus`,
  findar:`${SERVER_LINK}ar/getaboutus`
};
export const DEFINATION = {
  finden: `${SERVER_LINK}en/getAllDefinition`,
  findar: `${SERVER_LINK}ar/getAllDefinition`,

};
export const GET_USER = {
  find: `${SERVER_LINK}getAllUser`,

};
export const ADD_USER = {
  add: `${SERVER_LINK}AddUser`,

};

export const LOGIN_USER = {
  login: `${SERVER_LINK}Login`,

};
export const CREATE_TEAM = {
  team: `${SERVER_LINK}createTeam`,

};
export const REMOVE_TEAM = {
  remove: `${SERVER_LINK}removeteam`,

};  
export const REMOVE_SEASON = {
  remove: `${SERVER_LINK}removeyear`,

};
export const GET_IMAGE = {
  get: `${SERVER_LINK}GetImage`,

};
export const DELETE_USER = {
  delete: `${SERVER_LINK}deleteUser`,

};
export const GET_CAFE = {
  cafeen: `${SERVER_LINK}en/getAllCafe`,
  cafear: `${SERVER_LINK}ar/getAllCafe`,

};
export const REMOVE_LEAGUE = {
  remove: `${SERVER_LINK}removeLeague`
  

};
export const GET_ROUTS = {
  getroute: `${SERVER_LINK}getroutes`
  

};
export const CREATE = {
  create: `${SERVER_LINK}create`
  

};
export const ADMIN_ALL_TEAM = {
  team: `${SERVER_LINK}en/GetAllTeams`  
};
export const UPDATE_TEAM = {
  updateTeam: `${SERVER_LINK}updateTeams`  
};
export const FIND_TEAM_ID = {
  teamen: `${SERVER_LINK}en/getByIdTeams` ,
  teamar: `${SERVER_LINK}ar/getByIdTeams`   
};

export const TEAM_Q=(lang)=>{
  return `${SERVER_LINK}/${lang}/getByIdTeams`
}
// export const FIND_TEAM = {
//   find: `${SERVER_LINK}/${lang}/scrolldown/find`,
// };

export const FIND_TEAM=(lang)=>{
  return {
    find:`${SERVER_LINK}${lang}/scrolldown/find`
  }
}

export const BASE_URL = "http://localhost:5000/uploads/";






