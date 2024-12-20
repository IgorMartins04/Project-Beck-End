const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// rota para gerar o relatório
router.get("/generate", reportController.generateReport);

module.exports = router;
