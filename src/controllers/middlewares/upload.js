const multer = require("multer");
const path = require("path");
const { v4: uuid } = require("uuid");

const defaultStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/avatar");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid()}${path.extname(file.originalname)}`);
  },
});
const avatarStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/avatar");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid()}${path.extname(file.originalname)}`);
  },
});

const postStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/posts");
  },
  filename: function (req, file, cb) {
    cb(null, `${uuid()}${path.extname(file.originalname)}`);
  },
});

const uploadFile = multer({ defaultStorage });
const uploadAvatar = multer({ avatarStorage });
const uploadPost = multer({ postStorage });

//uploadFile.array("img")
module.exports = {
  uploadFile,
  uploadAvatar,
  uploadPost,
};
