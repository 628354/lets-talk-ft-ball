const express = require('express')
const router = express.Router()
const multer = require('multer')
const { authentication } = require('../middleware/auth')

// const upload = multer({
//   dest: 'uploads/',
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
const teamCatlog = require('../controller/teamCatlog')

//=============================================admin routes==================================
router.post("/createTeam", upload.single("image"), teamCatlog.createTeam);
router.put('/updateTeams/:id', teamCatlog.updateTeams)
router.delete("/removeteam/:id", teamCatlog.removeteam);
router.get('/:lung/GetAllTeams', teamCatlog.GetAllTeams)
router.get('/:lung/getByIdTeams/:id', teamCatlog.getByIdTeams)
router.get('/TeamsFilter', teamCatlog.TeamsFilter)


//============================================website routes====================================
router.post('/uploadCatLog', upload.single('excelFile'), teamCatlog.CatlogImport);
router.get('/:lung/find', teamCatlog.findTeam);
router.get("/:lung/findAll", teamCatlog.findAllTeam);
router.get("/:lung/teamdetails/:id", teamCatlog.teamdetails);



module.exports = router