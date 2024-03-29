const teamCatlog = require("../model/teamCatlog");
const teamdata = require("../model/teamdata");
const multer = require("multer");
const XLSX = require("xlsx");
const upload = multer({ dest: "uploads" });
const path = require("path");
const responseHelper = require("../Helpers/Response");
const league = require('../model/league')
module.exports = {
    //===========================================website====================================================
    CatlogImport: async (req, res) => {
        const filePath = req.file.path;
        const workbook = XLSX.readFile(filePath);
        const sheetNames = workbook.SheetNames;
        const allData = [];
        sheetNames.forEach(async (sheetName) => {
            const sheetsTeamData = [];
            const worksheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            for (let i = 0; i < data.length; i++) {
                let myData = [];
                const map = new Map(Object.entries(data[i]));
                const keys = map.keys(data[i]);
                for (const key of map.keys(data[i])) {
                    const regex = /[\s!@#$%^&*()+={}\[\]:;<>,.?\/\\`~"'|]+/g;
                    const resultString = key.replace(regex, "_");
                    myData[resultString] = data[i][key];
                    // data[i][modifiedString]= data[i][key];
                }

                allData.push({
                    leagueid: req.body.league,
                    en: {
                        Team_Name_English: myData.Team_Name_English,
                        Team_Name_Short_English: myData.Team_Name_Short_English,
                        Description_English: myData.Description_English,
                        SEO_URL: myData.SEO_URL,
                        Past_teams_logo_file_names_below: myData.Past_teams_logo_file_names_below,
                        logo_folder: myData.logo_folder,
                        Team_info: myData.Team_info,
                        Team_info: myData.Team_info
                    },
                    ar: {
                        Team_Name_Arabic: myData.Team_Name_Arabic,
                        Team_Name_Short_Arabic: myData.Team_Name_Short_Arabic,
                        Description_Arabic: myData.Description_Arabic,
                        SEO_URL: myData.SEO_URL,
                        Past_teams_logo_file_names_below: myData.Past_teams_logo_file_names_below,
                        logo_folder: myData.logo_folder,
                        Team_info: myData.Team_info,
                        Team_info: myData.Team_info
                    },
                    Image: myData.Image,
                });
            }
        });

        const addleage = await teamCatlog.create(allData);
        responseHelper[200].data = addleage;
        res.send(responseHelper[200]);
    },
    findTeam: async (Request, Response) => {
        const { lung } = Request.params;
        const { leagueId } = Request.body;
        const data = await teamCatlog.find(
            { leagueid: leagueId },
            { _id: 1, seasonid: 1, datatype: 1, leagueid: 1, [lung]: 1 }
        );
        responseHelper[200].data = data;
        Response.send(responseHelper[200]);
    },
    findAllTeam: async (Request, Response) => {
        const { lung } = Request.params;
        const data = await teamCatlog.find({}, { [lung]: 1 }).populate("leagueid");
        responseHelper[200].data = data;
        Response.send(responseHelper[200]);
    },
    teamdetails: async (Request, Response) => {
        const { lung } = Request.params;
        const data = await teamCatlog.findById(
            { _id: Request.params.id },
            { _id: 1, seasonid: 1, datatype: 1, leagueid: 1, [lung]: 1 }
        );
        responseHelper[200].data = data;
        Response.send(responseHelper[200]);
    },

    //============================================admin ===================================================

    createTeam: async (req, res) => {
        try {
            const { Image, en, ar } = req.body;
            const find = await teamCatlog.findOne({
                "en.Team_Name_English": en.Team_Name_English,
            });
            if (find) {
                return res.status(400).send("Teams already present");
            }
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}//${host}`;
            const addTeam = await teamCatlog.create({
                leagueid: req.body.leagueid,
                Image: Image,
                en: {
                    Team_Name_English: en.Team_Name_English || "",
                    Team_Name_Short_English: en.Team_Name_Short_English || "",
                    Description_English: en.Description_English || "",
                    Team_info: en.Team_info || "",
                    logo_folder: en.logo_folder || "",
                    status: en.status || "active",
                    Graph_Title1: en.Graph_Title1 || "",
                    Graph_Title2: en.Graph_Title2 || "",
                    Graph_Title3: en.Graph_Title3 || "",
                    Graph_Title4: en.Graph_Title4 || "",
                    Past_teams_logo_file_names_below: en.Past_teams_logo_file_names_below || "",
                    SEO_URL: en.SEO_URL || "",
                },
                ar: {
                    Team_Name_Arabic: ar.Team_Name_Arabic || "",
                    Team_Name_Short_Arabic: ar.Team_Name_Short_Arabic || "",
                    Description_Arabic: ar.Description_Arabic || "",
                    Team_info: ar.Team_info || "",
                    logo_folder: ar.logo_folder || "",
                    status: ar.status || "active",
                    Graph_Title1: ar.Graph_Title1 || "",
                    Graph_Title2: ar.Graph_Title2 || "",
                    Graph_Title3: ar.Graph_Title3 || "",
                    Graph_Title4: ar.Graph_Title4 || "",
                    Past_teams_logo_file_names_below: ar.Past_teams_logo_file_names_below || "",
                    SEO_URL: ar.SEO_URL || "",
                },
            });
            res.status(200).send({
                body: addTeam,
                message: "Teams Add Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Enternal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    GetAllTeams: async (req, res) => {
        try {
            const { lung } = req.params;
            const allteams = await teamCatlog.find({}, { [lung]: 1, Image: 1 }).populate({
                path: "leagueid",
                select: ["en.leaguename", "ar.leaguename"],
            });

            res.status(200).send({
                body: allteams,
                message: "Get All Teams Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Enternal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    getByIdTeams: async (req, res) => {
        try {
            const { lung } = req.params;
            const getByIdTeams = await teamCatlog
                .findById({ _id: req.params.id }, { [lung]: 1, Image: 1 })
                .populate({
                    path: "leagueid",
                    select: ["en.leaguename"],
                });
            if (getByIdTeams) {
                res.status(200).send({
                    body: getByIdTeams,
                    message: "Get By Id Teams Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Teams Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Enternal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    updateTeams: async (req, res) => {
        try {
            const files = req.files;
            const protocol = req.protocol;
            const host = req.hostname;
            const url = `${protocol}//${host}`;
            const { Image, en, ar } = req.body;

            const update = await teamCatlog.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    leagueid: req.body.leagueid,
                    Image: Image,
                    en: {
                        Team_Name_English: en.Team_Name_English || "",
                        Team_Name_Short_English: en.Team_Name_Short_English || "",
                        Description_English: en.Description_English || "",
                        Team_info: en.Team_info || "",
                        logo_folder: en.logo_folder || "",
                        status: en.status || "active",
                        Graph_Title1: en.Graph_Title1 || "",
                        Graph_Title2: en.Graph_Title2 || "",
                        Graph_Title3: en.Graph_Title3 || "",
                        Graph_Title4: en.Graph_Title4 || "",
                        Past_teams_logo_file_names_below: en.Past_teams_logo_file_names_below || "",
                        SEO_URL: en.SEO_URL || "",
                    },
                    ar: {
                        Team_Name_Arabic: ar.Team_Name_Arabic || "",
                        Team_Name_Short_Arabic: ar.Team_Name_Short_Arabic || "",
                        Description_Arabic: ar.Description_Arabic || "",
                        Team_info: ar.Team_info || "",
                        logo_folder: ar.logo_folder || "",
                        status: ar.status || "active",
                        Graph_Title1: ar.Graph_Title1 || "",
                        Graph_Title2: ar.Graph_Title2 || "",
                        Graph_Title3: ar.Graph_Title3 || "",
                        Graph_Title4: ar.Graph_Title4 || "",
                        Past_teams_logo_file_names_below: ar.Past_teams_logo_file_names_below || "",
                        SEO_URL: ar.SEO_URL || "",
                    },
                },
                { new: true }
            );

            if (update) {
                res.status(200).send({
                    body: update,
                    message: "Teams Updated Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Teams Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error",
                success: false,
                error: error.message,
            });
        }
    },
    removeteam: async (req, res) => {
        try {
            const removeteam = await teamCatlog.findByIdAndDelete({
                _id: req.params.id,
            });
            if (removeteam) {
                res.status(200).send({
                    body: removeteam,
                    message: "Teams Deleted Successfully",
                    success: true,
                });
            } else {
                res.status(300).send({
                    message: "Teams Id Not Found",
                    success: false,
                });
            }
        } catch (error) {
            res.status(500).send({
                message: "Enternal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    deleteAllTeam: async (req, res) => {
        try {
            const deleteTeams = await teamCatlog.deleteMany({})
            if (deleteTeams) {
                res.status(200).send({
                    body: deleteTeams,
                    message: 'All Teams Deleted Successfully',
                    success: true
                })
            } else {
                res.status(300).send({
                    message: 'Data Not Found',
                    success: false
                })
            }
        } catch (error) {
            res.status(500).send({
                message: "Enternal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    TeamsFilter: async (req, res) => {
        try {
            const { Team_Name_English, leaguename, status } = req.query;
            const filter = {};

            if (Team_Name_English) {
                filter["en.Team_Name_English"] = new RegExp(`^${Team_Name_English}`, "i");
            }

            if (leaguename) {
                filter["leagues_details.en.leaguename"] = new RegExp(`^${leaguename}`, "i");
            }

            if (status) {
                filter["en.status"] = new RegExp(`^${status}`, "i")
            }


            const teamsdata = await teamCatlog.aggregate([
                {
                    $lookup: {
                        from: "leagues",
                        localField: "leagueid",
                        foreignField: "_id",
                        as: "leagues_details",
                    },
                },
                {
                    $match: filter,
                },
                {
                    $sort: {
                        createdAt: -1,
                    },
                },
            ]);

            res.status(200).send({
                body: teamsdata,
                message: "Get Data for teamCatlog Successfully",
                success: true,
            });
        } catch (error) {
            res.status(500).send({
                message: "Internal server Error",
                success: false,
                error: error.message,
            });
        }
    },
    updateStatus: async (req, res) => {
        try {
            const { en, ar } = req.body;

            const updatedPermission = await teamCatlog.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $set: {
                        "en.status": (en && en.status) || "enable",
                        "ar.status": (ar && ar.status) || "enable",
                        is_Deleted: true
                    }
                },
                { new: true, lean: true }
            );

            if (!updatedPermission) {
                return res.status(404).send({
                    message: 'Status not found',
                    success: false
                });
            }

            res.status(200).send({
                body: updatedPermission,
                message: 'Status Updated successfully',
                success: true
            });

        } catch (error) {
            res.status(500).send({
                message: 'Internal Server Error',
                success: false,
                error: error.message
            });
        }
    }
}