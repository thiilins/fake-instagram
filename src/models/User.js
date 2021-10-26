module.exports = (connection, DataTypes) => {
  const User = connection.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(200),
      },
      email: {
        type: DataTypes.STRING(200),
      },
      password: {
        type: DataTypes.STRING(256),
      },
      username: {
        type: DataTypes.STRING(200),
      },
      avatar: {
        type: DataTypes.STRING(200),
      },
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );
  User.associate = (models) => {
    User.hasMany(models.Publication, {
      foreignKey: "user_id",
      as: "publications",
    });
    User.hasMany(models.Comment, {
      foreignKey: "user_id",
      as: "comments",
    });
  };
  return User;
};
