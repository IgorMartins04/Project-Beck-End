const db = require("../database/db");

// adiciona um novo usuário ao banco de dados
const createUser = (name, email, password, role, callback) => {
  const query = `INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)`;
  db.run(query, [name, email, password, role], function (err) {
    callback(err, this.lastID); // retorna erro ou ID do novo usuário
  });
};

// obtém todos os usuários do banco de dados
const getUsers = (callback) => {
  const query = "SELECT * FROM users";
  db.all(query, [], (err, rows) => {
    callback(err, rows); // retorna erro ou lista de usuários
  });
};

module.exports = { createUser, getUsers };
