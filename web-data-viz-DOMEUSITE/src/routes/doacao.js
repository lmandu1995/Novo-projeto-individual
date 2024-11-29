var express = require("express");
var router = express.Router();

var doacaoController = require("../controllers/doacaoController");



router.post("/cadastrar", function (req, res) {
  doacaoController.cadastrar(req, res);
})

router.get("/listarProduto", function (req, res) {
  doacaoController.listarProduto(req, res);
});

router.get("/listar", function (req, res) {
  doacaoController.listar(req, res);
});


router.get("/listarKPI", function (req, res) {
  doacaoController.listarKPI(req, res);
});

router.get("/listarKPI_individual/:fkCadastro", function (req, res) {
  doacaoController.listarKPI_individual(req, res);
});


module.exports = router;