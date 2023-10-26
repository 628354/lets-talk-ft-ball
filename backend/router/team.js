const express = require("express")
const router = express.Router()
const path = require('path');

const teamController = require("../controller/team")

const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname)); 
    },
  });
  
  const upload = multer({ storage: storage });

router.post("/addteam" ,upload.single("image") ,teamController.addTeam)

router.get("/getTeams" , teamController.getTeams)



module.exports = router