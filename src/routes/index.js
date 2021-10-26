const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");
const AuthController = require("../controllers/AuthController"),
  MainController = require("../controllers/MainController");

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
  MainController.createPublication
);
module.exports = router;
