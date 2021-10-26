const express = require("express"),
  router = express.Router(),
  auth = require("../middlewares/auth"),
  AuthController = require("../controllers/Auth"),
  MainController = require("../controllers/Main"),
const upload = require("../middlewares/upload");

router.get("/", AuthController.showLogin);

router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login);

router.get("/registro", AuthController.showRegister);
router.post("/cadastrar", AuthController.register);

router.get("/home", auth, MainController.showHome);
router.get("/publicar", auth, MainController.showCreatePublication);

router.post(
  "/publicar",
  auth,
  upload.single("photo"),
  PainController.createPublication
);
module.exports = router;
