const db = require("../database/db");

// obtém dados do relatório com base no intervalo de datas
const getReportData = (startDate, endDate, callback) => {
  const query = `SELECT COUNT(*) AS total_sales, SUM(price) AS total_value, AVG(price) AS average_price
                 FROM sales WHERE date BETWEEN ? AND ?`;

  // executa a consulta no banco de dados
  db.get(query, [startDate, endDate], (err, row) => {
    callback(err, row); // retorna o resultado ou erro via callback
  });
};

module.exports = { getReportData };
