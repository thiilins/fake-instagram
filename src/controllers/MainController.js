const { Publication, User, Comment } = require("../models");

const mainController = {
  async showHome(req, res) {
    try {
      const posts = await Publication.findAll({
        include: {
          model: User,
          as: "user",
          required: true,
        },
      });
      return res.render("home", { posts });
    } catch (error) {
      console.log(error);
      res.render("home", {
        error: "Ops! Não foi possível carregar as publicações",
      });
    }
  },
  showCreatePublication(req, res) {
    return res.render("post");
  },
  async createPublication(req, res) {
    try {
      const { filename } = req.file;
      const { user } = req.session;
      const newPost = await Publication.create({
        image: filename,
        user_id: user.id,
      });
      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.render("post", {
        error: "Erro ao tentar cadastrar a publicação",
      });
    }
  },
};

module.exports = mainController;
