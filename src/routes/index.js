const express = require("express");
const router = express.Router();
const auth = require("../controllers/middlewares/auth");
const authController = require("../controllers/Auth");
const mainController = require("../controllers/Main");

router.get("/", authController.showLogin);

router.get("/login", authController.showLogin);
router.post("/entrar", authController.login);

router.get("/registro", authController.showRegister);
router.post("/cadastrar", authController.register);

router.get("/home", auth, mainController.showHome);
router.get("/publicar", auth, mainController.showCreatePublication);

module.exports = router;
