/** @format */

const express = require("express");
const router = express.Router();
const GraphController = require("../controller/GraphController");
const {authentication} = require("../middleware/auth");

router.post("/:lung/scrolldown/find/:leagueId",authentication, GraphController.ScrollDown);
router.post("/:lung/teamname/find", authentication,GraphController.findByteamName);
router.post("/:lung/goals-scored/find",authentication, GraphController.Goals_Scored);
router.post("/:lung/goals-con/find",authentication, GraphController.Goals_Con);
router.post("/:lung/gs-gc/find",authentication, GraphController.gs_gc);

module.exports = router;
