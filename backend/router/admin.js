const express = require("express")
const router = express.Router()


const adminController = require("../controller/admin")



router.post("/adminRegister" , adminController.register)

router.post("/adminLogin" , adminController.login)


module.exports = router