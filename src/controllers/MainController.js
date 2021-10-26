const { Publication, User, Comment } = require("../models");
const mainController = {
  async showHome(req, res) {
    try {
      const { user } = req.session;
      const posts = await Publication.findAll({
        include: [
          {
            model: User,
            as: "user",
            required: true,
          },
          {
            model: Comment,
            as: "comments",
            required: false,
            include: {
              model: User,
              as: "user",
              required: true,
            },
          },
        ],
      });

      // return res.status(200).json(posts);
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
  async createComments(req, res) {
    try {
      const { user_id, post_id } = req.params;
      const { content } = req.body;
      const newComment = await Comment.create({
        content,
        publication_id: post_id,
        user_id,
      });

      return res.redirect("/home");
    } catch (error) {
      console.log(error);
      return res.render("home", {
        error: "Ops! Não foi possível inserir seu comentário",
      });
    }
  },
};

module.exports = mainController;
