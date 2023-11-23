const express = require("express")
const router = express.Router()


const usercontroller = require("../controller/user")

const {authentication} = require("../middleware/auth")


router.post("/Register" , usercontroller.register)
router.post("/Login" , usercontroller.login)
router.post("/forget-passwordlink" , authentication , usercontroller.sendlink)
router.post("/forget-password/:userId" ,authentication, usercontroller.forgetpassword)


module.exports = router