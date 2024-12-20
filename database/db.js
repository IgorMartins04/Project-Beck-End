const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Define o caminho do banco de dados
const dbPath = path.resolve(__dirname, "database.db");

// Conecta ao banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar no banco de dados", err.message);
  } else {
    console.log("Conectado ao banco de dados SQLite");
  }
});

// Cria tabelas se não existirem
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT, role TEXT)"
  );
  db.run(
    "CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY AUTOINCREMENT, product_name TEXT, price REAL, date DATE)"
  );
});

module.exports = db;
