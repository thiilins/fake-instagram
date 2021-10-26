const { Publication, User, Comment } = require("../models");

const mainController = {
  showHome(req, res) {
    return res.render("home");
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
