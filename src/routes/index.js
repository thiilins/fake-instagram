const express = require("express"),
  router = express.Router(),
  auth = require("../middlewares/auth"),
  authController = require("../controllers/Auth"),
  mainController = require("../controllers/Main");
const upload = require("../middlewares/upload");

router.get("/", authController.showLogin);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);

router.get("/registro", authController.showRegister);
router.post("/cadastrar", authController.register);

router.get("/home", auth, mainController.showHome);
router.get("/publicar", auth, mainController.showCreatePublication);
router.post(
  "/publicar",
  auth,
  upload.single("photo"),
  mainController.createPublication
);
module.exports = router;
