const teamCatlog = require('../model/teamCatlog')
const teamdata = require('../model/teamdata')
const multer = require('multer');
const XLSX = require('xlsx');
const upload = multer({ dest: 'uploads' });
const path = require('path')
const responseHelper = require('../Helpers/Response');

module.exports = {
    CatlogImport: async (req, res) => {
        const filePath = req.file.path;
        const workbook = XLSX.readFile(filePath);
        const sheetNames = workbook.SheetNames;
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
                    myData[resultString] = data[i][key]
                    // data[i][modifiedString]= data[i][key];
                }


                allData.push({
                    leagueid: req.body.league,
                    en: {
                        Team_Name_English: myData.Team_Name_English,
                        Team_Name_Short_English: myData.Team_Name_Short_English,
                        Description_English: myData.Description_English,
                    },
                    ar: {
                        Team_Name_Arabic: myData.Team_Name_Arabic,
                        Team_Name_Short_Arabic: myData.Team_Name_Short_Arabic,
                        Description_Arabic: myData.Description_Arabic,
                    },
                    Image: myData.Image,
                    SEO_URL: myData.SEO_URL,
                    Past_teams_logo_file_names_below: myData.Past_teams_logo_file_names_below,
                    logo_folder: myData.logo_folder,
                    Team_info: myData['Team info BU']
                })

            }

        });


        const addleage = await teamCatlog.create(allData)
        responseHelper[200].data = addleage;
        res.send(responseHelper[200]);

    },

    findTeam: async (Request, Response) => {
        const { lung } = Request.params;
        const { leagueId } = Request.body
        const data = await teamCatlog.find({ leagueid: leagueId }, { _id: 1, seasonid: 1, datatype: 1, leagueid: 1, [lung]: 1 });
        responseHelper[200].data = data;
        Response.send(responseHelper[200]);
    },

    teamMatch: async (req, res) => {
        try {
            const { seasons, leagues, teamname } = req.query;
            const matchFilter = {};
            if (seasons) {
                matchFilter['seasons_details.name'] = new RegExp(seasons, 'i');
            }

            if (leagues) {
                matchFilter['leagues_details.name'] = new RegExp(leagues, 'i');
            }

            if (teamname) {
                matchFilter['teamname_details.name'] = new RegExp(teamname, 'i');
            }

            const teams = await teamdata.aggregate([
                {
                    $match: matchFilter,
                },
                {
                    $lookup: {
                        from: "seasons",
                        localField: "seasonid",
                        foreignField: "_id",
                        as: "seasons_details"
                    }
                },
                {
                    $lookup: {
                        from: "leagues",
                        localField: "leagueid",
                        foreignField: "_id",
                        as: "leagues_details"
                    }
                },
                {
                    $lookup: {
                        from: "teamname",
                        localField: "teamname",
                        foreignField: "_id",
                        as: "teamname_details"
                    }
                }
            ]);

            res.status(200).send({
                body: teams,
                message: 'Teams Match Successfully',
                success: true
            });
        } catch (error) {
            res.status(500).send({
                message: 'Error occurred while matching teams',
                success: false
            });
        }
    },
};


