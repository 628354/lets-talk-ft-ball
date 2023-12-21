/** @format */

const express = require("express");
const router = express.Router();
const GraphController = require("../controller/GraphController");
const {authentication} = require("../middleware/auth");


router.post("/:lung/scrolldown/find/:leagueId", GraphController.ScrollDown);
router.post("/:lung/teamname/find", GraphController.findByteamName);
router.post("/:lung/goals-scored/find", GraphController.Goals_Scored);
router.post("/:lung/goals-con/find", GraphController.Goals_Con);
router.post("/:lung/gs-gc/find", GraphController.gs_gc);
router.post('/:lung/team_details', GraphController.team_details)
router.post('/:lung/teamSeasson/find', GraphController.teamSeasson)
router.post('/:lung/teamSeassonName/find', GraphController.teamSeassonName)
router.post('/:lung/teamSeassonGaneRate/find', GraphController.teamSeassonGaneRate)
router.post('/:lung/teamSeassonGC/find', GraphController.teamSeassonGC)
router.post('/:lung/teamGS_inG/find', GraphController.teamGS_inG)
router.post('/:lung/teamGS_GC/find', GraphController.teamGS_GC)

module.exports = router;
