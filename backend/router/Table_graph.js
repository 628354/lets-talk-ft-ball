const express =  require('express');
const Route = express.Router();
const GraphController = require('../controller/GraphController');


Route.get('/scrolldown/find/:leagueId',GraphController.ScrollDown)
Route.get('/teamname/find',GraphController.findByteamName)
Route.get('/goals-scored/find',GraphController.Goals_Scored)
Route.get('/goals-con/find',GraphController.Goals_Con)
Route.get('/gs-gc/find',GraphController.gs_gc)




module.exports = Route;