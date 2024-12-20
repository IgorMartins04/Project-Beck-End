const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// rota para registrar um novo usuário
router.post("/register", userController.registerUser);

// rota para listar todos os usuários
router.get("/", userController.getUsers);

module.exports = router;
