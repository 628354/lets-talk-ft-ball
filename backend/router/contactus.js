const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const contactus = require('../controller/contactus')

router.post("/sendcontactusToadmin", contactus.sendContactus);

module.exports = router;
