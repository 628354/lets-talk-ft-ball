const express =  require('express');
const router = express.Router();
const GraphController = require('../controller/GraphController');
const authentication = require('../middleware/auth')


router.get('/:lung/scrolldown/find/:leagueId',GraphController.ScrollDown)
router.get('/:lung/teamname/find',GraphController.findByteamName)
router.get('/:lung/goals-scored/find',GraphController.Goals_Scored)
router.get('/:lung/goals-con/find',GraphController.Goals_Con)
router.get('/:lung/gs-gc/find',GraphController.gs_gc)




module.exports = router;