const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/user");
const { authentication } = require("../middleware/auth");
const multer = require("multer");
const upload = multer({
  dest: 'uploads/',
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage: storage });

router.post("/Signup",uploads.single("image"), usercontroller.register);

router.post("/Login", usercontroller.login);
router.post("/forget-passwordlink", authentication, usercontroller.sendlink);
router.post(
  "/forget-password/:userId",
  authentication,
  usercontroller.forgetpassword
);

router.post('/AddUser', usercontroller.AddUser)
router.get("/getAllUser", authentication, usercontroller.getAllUser);
router.get('/GetUserById/:id', authentication, usercontroller.GetUserById)
router.put('/updateUser/:id',authentication, usercontroller.updateUser )
router.delete('/deleteUser/:id',authentication, usercontroller.deleteUser)
router.post('/AddUser', usercontroller.AddUser)
module.exports = router;
