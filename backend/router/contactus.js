const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const contactus = require('../controller/contactus')

router.post("/sendcontactusToadmin", contactus.sendContactus);
router.post('/createContactUs', contactus.createContactUs)
router.put('/updateContactUs/:id', contactus.updateContactUs)

module.exports = router;
