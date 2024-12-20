// modelo de usuários
const userModel = require("../models/userModel");

// registrar um novo usuário
const registerUser = (req, res) => {
  // extrai os dados do corpo da requisição
  const { name, email, password, role } = req.body;

  // chama o modelo para criar um usuário no banco de dados
  userModel.createUser(name, email, password, role, (err, userId) => {
    // verifica erro durante o registro
    if (err) {
      return res
        .status(500) // erro interno do servidor (500)
        .json({ message: "Erro ao registrar o usuário" });
    }

    // eesponde com sucesso e o ID do novo usuário
    res
      .status(201) // Código de recurso criado com sucesso
      .json({ message: "Usuário registrado com sucesso", userId });
  });
};

// função para obter a lista de usuários
const getUsers = (req, res) => {
  // chama o modelo para buscar todos os usuários
  userModel.getUsers((err, users) => {
    // verifica se ocorreu algum erro ao buscar os usuários
    if (err) {
      return res
        .status(500) // retorna erro interno do servidor (500)
        .json({ message: "Erro ao obter usuários" });
    }

    // responde com a lista de usuários
    res.status(200).json(users); // código de sucesso (200)
  });
};

// exporta as funções para uso em outras partes da aplicação
module.exports = { registerUser, getUsers };
