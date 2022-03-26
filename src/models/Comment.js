module.exports = (conection, DataTypes) => {
  const Comment = conection.define(
    "Comment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type: DataTypes.STRING,
      },
      publication_id: {
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "comments",
      timestamps: true,
    }
  );

  Comment.associate = (models) => {
    Comment.belongsTo(models.Publication, {
      foreignKey: "publication_id",
    });
    Comment.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });
  };
  Comment.sync()
  return Comment;
};
