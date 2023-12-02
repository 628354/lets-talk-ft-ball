const multer = require('multer');
const XLSX = require('xlsx');
const upload = multer({ dest: 'uploads' });
const leaguedata = require('../model/leaguedata');
const teadData = require('../model/teamdata');
const path = require('path')
const helper = require('../Helpers/Helpers')
const responseHelper = require('../Helpers/Response')

exports.leagedBlukImport = async (req, res) => {
  console.log(req, "DFVDFVDFVDFV");

  // const filePath = req.file.path;//
  const languageFile = req.files['excelFile'][0].path;
  const TeamFile = req.files['teamexcelFile'][0].path;

  const workbook = XLSX.readFile(languageFile);
  const sheetNames = workbook.SheetNames;

  const allData = [];

  sheetNames.forEach(async sheetName => {
    const sheetsData = [];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    for (let i = 0; i < data.length; i++) {
      sheetsData.push({
        teamname: data[i].TEAM,
        games: data[i].GP,
        win: data[i].W,
        draw: data[i].D,
        lose: data[i].L,
        goals_scored: data[i].GS,
        goals_conceded: data[i].GC,
        points: data[i].P,
        point_gap: (data[i]['POINTS GAIN %']) ? data[i]['POINTS GAIN %'] : " ",
        gs_gc: (data[i]['GOALS SCORED/GAME']) ? data[i]['GOALS SCORED/GAME'] : " ",
        win_precent: (data[i]['WIN%']) ? data[i]['WIN%'] : " "
      })

    }
    allData.push({
      seasonid: req.body.season,
      leagueid: req.body.league,
      datatype: sheetName,
      getData: sheetsData
    })
  });

  const addleage = await leaguedata.create(allData)


// Team Upload--------------------------




const workbookTeam = XLSX.readFile(TeamFile);

const sheetNamesTeam = workbookTeam.SheetNames;
console.log(sheetNames);
const allDataTeam = [];

sheetNamesTeam.forEach(async sheetName => {
  const sheetsTeamData = [];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet);
  for (let i = 0; i < data.length; i++) {
    let myData = [];
    const map = new Map(Object.entries(data[i]));
    const keys = map.keys(data[i])
    for (const key of map.keys(data[i])) {
      const words = key.split(' ');
      words.shift();
      const modifiedString = words.join('_');

      myData[modifiedString] = data[i][key]
      // data[i][modifiedString]= data[i][key];
    }
    sheetsTeamData.push({
      NO_OF_GAMES: myData['NO._OF_GAMES'],
      POINTS: myData.POINTS,
      POINTS_ACCUMULATED: myData.POINTS_ACCUMULATED,
      POINTS_GAINING_RATE: myData.POINTS_GAINING_RATE,
      GS_inG: myData.GS_inG,
      GS_cum: myData.GS_cum,
      GS_rate: myData.GS_rate,
      GC_inG: myData.GC_inG,
      GC_cum: myData.GC_cum,
      GC_rate: myData.GC_rate,
      GS_GC: (myData['GS/GC']) ? myData['GS/GC'] : " ",
      Poverty_Line: myData.Line
    })

  }
  allDataTeam.push({
    seasonid: req.body.season,
    leagueid: req.body.league,
    teamname: sheetName,
    getData: sheetsTeamData
  })

});


const addTeam = await teadData.create(allDataTeam)



  responseHelper[200].data = addTeam;
  res.send(responseHelper[200]);

}

//---------------------------------- TEAM BULK IMPORT -------------------------------------

exports.teamBulkImport = async (req, res) => {

  const filePath = req.file.path;

  const workbook = XLSX.readFile(filePath);

  const sheetNames = workbook.SheetNames;
  console.log(sheetNames);
  const allData = [];

  sheetNames.forEach(async sheetName => {
    const sheetsTeamData = [];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    for (let i = 0; i < data.length; i++) {
      let myData = [];
      const map = new Map(Object.entries(data[i]));
      const keys = map.keys(data[i])
      for (const key of map.keys(data[i])) {
        const words = key.split(' ');
        words.shift();
        const modifiedString = words.join('_');

        myData[modifiedString] = data[i][key]
        // data[i][modifiedString]= data[i][key];
      }
      sheetsTeamData.push({
        NO_OF_GAMES: myData['NO._OF_GAMES'],
        POINTS: myData.POINTS,
        POINTS_ACCUMULATED: myData.POINTS_ACCUMULATED,
        POINTS_GAINING_RATE: myData.POINTS_GAINING_RATE,
        GS_inG: myData.GS_inG,
        GS_cum: myData.GS_cum,
        GS_rate: myData.GS_rate,
        GC_inG: myData.GC_inG,
        GC_cum: myData.GC_cum,
        GC_rate: myData.GC_rate,
        GS_GC: (myData['GS/GC']) ? myData['GS/GC'] : " ",
        Poverty_Line: myData.Line
      })

    }
    allData.push({
      seasonid: req.body.season,
      leagueid: req.body.league,
      teamname: sheetName,
      getData: sheetsTeamData
    })

  });


  const addleage = await teadData.create(allData)
  responseHelper[200].data = addleage;
  res.send(responseHelper[200]);

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
