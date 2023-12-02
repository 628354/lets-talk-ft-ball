const express = require("express");
const router = express.Router();
const permission = require("../controller/permission");
const { authentication } = require("../middleware/auth");


router.post("/create", authentication, permission.create);
router.get("/getById/:id", permission.getById);
router.get("/getAll",authentication, permission.getAll);
router.put("/update/:id", permission.update);
router.delete("/delete/:id", permission.delete);
router.post('/statusUpdate/:id', permission.statusUpdate)

module.exports = router;
