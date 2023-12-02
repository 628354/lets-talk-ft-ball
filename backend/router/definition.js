const express = require("express");
const router = express.Router();

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
  definitionController.adddefinitions
);

router.post(
  "/adddefinitionInexisting/:id",
  definitionController.adddefinitiontype
);

router.post(
  "/updatedata/:objectId/:arrayElementId",
  definitionController.updatedata
);
router.delete("/definitionDelete/:id", definitionController.definitionDelete);

router.get("/getAllDefinition", definitionController.getAllDefinition);
router.get('/getDefinitionById/:id', definitionController.getDefinitionById)

module.exports = router;
