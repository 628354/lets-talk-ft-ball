const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const contactus = require('../controller/contactus')

router.post("/sendcontactusToadmin", contactus.sendContactus);
router.post('/createContactUs', contactus.createContactUs)
router.put('/updateContactUs/:id', contactus.updateContactUs)
router.get('/:lung/getContactUs', contactus.getContactUs)
router.delete('/deleteContact/:id', contactus.deleteContact)

module.exports = router;
