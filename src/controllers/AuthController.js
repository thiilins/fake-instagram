const { User } = require("../models");
const bcrypt = require("bcryptjs");

const authController = {
  showLogin(req, res) {
    return res.render("auth/login");
  },
  showRegister(req, res) {
    return res.render("auth/register");
  },
  async register(req, res) {
    try {
      //Pegando os dados que vem da requisição
      const { name, email, password, username } = req.body;
      // Usando o metodo create do sequelize para add um user no DB
      const user = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
        username,
        avatar: "default_avatar.png",
      });
      // Se concluido com sucesso encaminhará o usuário para a página de login
      return res.redirect("/login");
      //Capturando o erro
    } catch (error) {
      // Retornará no console o erro
      console.log(error);
      // Redirecionará o usuário para a página de registro novamente informando que houve um erro!
      return res.redirect("/registro", {
        error: "Ops! Não foi possível efetuar o seu cadastro!",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.render("auth/login", {
          error: "Usuario ou Senha incorretos!",
        });
      }
      Object.assign(req.session, {
        user: {
          id: user.id,
          name: user.name,
          username: user.username,
          avatar: user.avatar,
        },
      });

      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.redirect("login", {
        error: "Sistema indisponivel tente novamente!",
      });
    }
  },
};
module.exports = authController;
