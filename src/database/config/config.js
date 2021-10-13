module.exports = {
  development: {
    username: "root",
    password: null,
    database: "fake_instagram",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
    },
  },
  test: {
    username: "root",
    password: null,
    database: "fake_instagram",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
    },
  },
  production: {
    username: "root",
    password: null,
    database: "fake_instagram",
    host: "127.0.0.1",
    dialect: "mysql",
    define: {
      timestamps: true, // Cria automaticamente as inserções em created_at e update_at
    },
  },
};
