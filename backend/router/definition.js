const express = require("express");
const router = express.Router();
const {authentication} = require('../middleware/auth')
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const definitionController = require("../controller/definition");

router.post(
  "/addDefinition",authentication,
  upload.single("image"),
  definitionController.adddefinitions
);

router.post(
  "/adddefinitionInexisting/:id",authentication,
  definitionController.adddefinitiontype
);

router.post(
  "/updatedata/:objectId/:arrayElementId",authentication,
  definitionController.updatedata
);
router.delete("/definitionDelete/:id",authentication, definitionController.definitionDelete);

router.get("/getAllDefinition",authentication, definitionController.getAllDefinition);
router.get('/getDefinitionById/:id',authentication, definitionController.getDefinitionById)

module.exports = router;
