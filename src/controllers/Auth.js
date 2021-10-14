const { User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  async registerNewUser(req, res) {
    try {
      const { name, email, password, username } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = await User.create({
        name,
        email,
        password: hash,
        username,
        avatar: null,
        created_at: null,
        updated_at: null,
      });
      return res.redirect("/login");
    } catch (error) {
      console.log(error);
      return res.redirect("/registro", {
        error: "Ops! Não foi possível efetuar o seu cadastro!",
      });
    }
  },
};
module.exports = authController;
