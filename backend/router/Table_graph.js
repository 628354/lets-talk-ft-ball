/** @format */

const express = require("express");
const router = express.Router();
const GraphController = require("../controller/GraphController");
const authentication = require("../middleware/auth");

router.post("/:lung/scrolldown/find/:leagueId", GraphController.ScrollDown);
router.post("/:lung/teamname/find", GraphController.findByteamName);
router.post("/:lung/goals-scored/find", GraphController.Goals_Scored);
router.post("/:lung/goals-con/find", GraphController.Goals_Con);
router.post("/:lung/gs-gc/find", GraphController.gs_gc);

module.exports = router;
