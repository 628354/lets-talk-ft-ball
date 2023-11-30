const express = require("express");
const router = express.Router();
const permission = require("../controller/permission");

router.post("/create", permission.create);
router.get("/getById/:id", permission.getById);
router.get("/getAll", permission.getAll);
router.put("/update/:id", permission.update);
router.delete("/delete/:id", permission.delete);
router.post('/statusUpdate/:id', permission.statusUpdate)

module.exports = router;
