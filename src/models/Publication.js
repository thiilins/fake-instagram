module.exports = (connection, DataTypes) => {
  const Publication = connection.define(
    "Publication",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING(200),
      },
      content: {
        type: DataTypes.STRING(3000),
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "publications",
      timestamps: true,
    }
  );
  Publication.associate = (models) => {
    Publication.belongsTo(models.User, {
      foreignKey: "user_id",
    });
  };
  return Publication;
};
