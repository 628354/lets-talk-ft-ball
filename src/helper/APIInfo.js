const SERVER_LINK = "http://localhost:5000/";
const SERVER_IMAGES = "http://localhost:5000";
export const REQUEST_TYPE = {
  GET: "GET",
  POST: "POST",
};
export const IMAGES={
  imgs : SERVER_IMAGES+'/uploads/'
}


export const LEAGUES_BULK_IMPORT = {
  upload: `${SERVER_LINK}teadBulk`,
};

export const SESSION = {
  year: `${SERVER_LINK}getyears`,
};

export const LEAGUES = {
  league: `${SERVER_LINK}getleagues`,
};
