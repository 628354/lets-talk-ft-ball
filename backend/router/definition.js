const express = require("express");
const router = express.Router();
const { authentication } = require('../middleware/auth')
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
  "/addDefinition",
  upload.single("image"),
  definitionController.addDefinitions
);

router.post(
  "/:lung/adddefinitionInexisting/:id",
  definitionController.adddefinitiontype
);

router.post(
  "/:lung/updatedata/:objectId/:arrayElementId",
  definitionController.updatedata
);
router.delete("/definitionDelete/:id", definitionController.definitionDelete);

router.get("/:lung/getAllDefinition", definitionController.getAllDefinition);
router.get('/:lung/getDefinitionById/:id', definitionController.getDefinitionById)

module.exports = router;
