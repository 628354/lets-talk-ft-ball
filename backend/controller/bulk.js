const multer = require('multer');
const XLSX = require('xlsx');
const upload = multer({ dest: 'uploads/' });
const leaguedata = require('../model/leaguedata');
​
exports.leagedBlukImport = async (req, res) => {
​
  const filePath = req.file.path;
​
  const workbook = XLSX.readFile(filePath);
​
  const sheetNames = workbook.SheetNames;
  
  const allData = [];
​
  sheetNames.forEach(async sheetName => {
    const sheetsData = [];
    const worksheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(worksheet);
    console.log('====================================');
    console.log(data.length);
    console.log('====================================');
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
        point_gap: (data[i]['POINTS GAIN %']) ?data[i]['POINTS GAIN %'] : " ",
        gs_gc: (data[i]['GOALS SCORED/GAME']) ? data[i]['GOALS SCORED/GAME'] : " ",
        win_precent: (data[i]['WIN%']) ?  data[i]['WIN%'] : " "
      })
    
    } 
    allData.push({
      seasonid: req.body.season,
      leagueid: req.body.league,
      datatype: sheetName,
      getData: sheetsData
    })
  });
​
  const addleage = await leaguedata.create(allData)
  res.send(addleage);
​
}