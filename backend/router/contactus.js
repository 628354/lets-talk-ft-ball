const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const contactusController = require("../controller/contactus");

router.post("/sendcontactusToadmin",authentication, contactusController.sendContactus);

module.exports = router;
