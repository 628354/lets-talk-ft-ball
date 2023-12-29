const express = require("express");
const router = express.Router();
const { authentication } = require('../middleware/auth')
const multer = require("multer");
const definition = require('../controller/definition')

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

router.post('/addDefinition', upload.single('image'), definition.addDefinitions)
router.get('/:lung/getAllDefinition', definition.getAllDefinition)
router.get('/:lung/getDefinitionById/:id', definition.getDefinitionById)
router.put('/updatedefinition/:id', definition.updatedefinition)
router.delete('/deleteDefinition/:id', definition.deleteDefinition)


module.exports = router;
