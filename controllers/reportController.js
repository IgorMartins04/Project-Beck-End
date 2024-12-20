// modelo de relatórios
const reportModel = require("../models/reportModel");

// gerar o relatório com base em um intervalo de datas
const generateReport = (req, res) => {
  // Extrai as datas de início e fim dos parâmetros da requisição
  const { startDate, endDate } = req.query;

  // Verifica se ambas as datas foram fornecidas
  if (!startDate || !endDate) {
    return res
      .status(400) // erro de requisição inválida (400)
      .json({ message: "Datas de início e fim são obrigatórias" });
  }

  // Obtém os dados do relatório chamando o método do modelo
  reportModel.getReportData(startDate, endDate, (err, reportData) => {
    // Verifica se ocorreu algum erro ao buscar os dados
    if (err) {
      return res.status(500).json({ message: "Erro ao gerar relatório" }); // erro interno do servidor (500)
    }

    // Responde com os dados do relatório em formato JSON
    res.status(200).json({
      total_sales: reportData.total_sales, // Total de vendas
      total_value: reportData.total_value, // Valor total das vendas
      average_price: reportData.average_price, // Preço médio das vendas
    });
  });
};

// Exporta a função para uso em outras partes da aplicação
module.exports = { generateReport };
