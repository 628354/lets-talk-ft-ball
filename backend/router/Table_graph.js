const express =  require('express');
const router = express.Router();
const GraphController = require('../controller/GraphController');


router.get('/scrolldown/find/:leagueId',GraphController.ScrollDown)
router.get('/teamname/find',GraphController.findByteamName)
router.get('/goals-scored/find',GraphController.Goals_Scored)
router.get('/goals-con/find',GraphController.Goals_Con)
router.get('/gs-gc/find',GraphController.gs_gc)




module.exports = router;