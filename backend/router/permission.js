const express = require("express");
const router = express.Router();
const permission = require("../controller/permission");
const { authentication } = require("../middleware/auth");


router.post("/create", authentication, permission.create);
router.get("/getById/:id",authentication, permission.getById);
router.get("/getAll",authentication, permission.getAll);
router.put("/update/:id",authentication, permission.update);
router.delete("/delete/:id",authentication, permission.delete);
router.post('/statusUpdate/:id',authentication, permission.statusUpdate)

module.exports = router;
