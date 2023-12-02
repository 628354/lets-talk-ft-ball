const teamCatlog = require('../model/teamCatlog')
const multer = require('multer');
const XLSX = require('xlsx');
const upload = multer({ dest: 'uploads' });
// const leaguedata = require('../model/leaguedata');
// const teadData = require('../model/teamdata');
const path = require('path')
const helper = require('../Helpers/Helpers')
const responseHelper = require('../Helpers/Response');
// const teamdata = require('../model/teamdata');

module.exports = {
    CatlogImport: async (req, res) => {

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
                    const regex = /[\s!@#$%^&*()+={}\[\]:;<>,.?\/\\`~"'|]+/g;
                    const resultString = key.replace(regex, "_");

                    console.log(resultString);

                    myData[resultString] = data[i][key]
                    // data[i][modifiedString]= data[i][key];
                }
              
                
                allData.push({
                    Team_Name_English:  myData.Team_Name_English,
                    Team_Name_Arabic:   myData.Team_Name_Arabic,
                    Team_Name_Short_English:    myData.Team_Name_Short_English,
                    Team_Name_Short_Arabic: myData.Team_Name_Short_Arabic,
                    Description_English:    myData.Description_English,
                    Description_Arabic: myData.Description_Arabic,
                    Image:  myData.Image,
                    SEO_URL:    myData.SEO_URL,
                    Past_teams_logo_file_names_below:   myData.Past_teams_logo_file_names_below,
                    logo_folder:    myData.logo_folder,
                    Team_info: myData['Team info BU']
                })

            }
           
        });


        const addleage = await teamCatlog.create(allData)
        responseHelper[200].data = addleage;
        res.send(responseHelper[200]);

    }
}