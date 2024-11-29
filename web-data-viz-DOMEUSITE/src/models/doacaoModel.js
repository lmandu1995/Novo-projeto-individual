var database = require("../database/config");

function buscarProduto() {
  var instrucaoSql = `Select produto, sabor from doacao`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


function cadastrar(qtd_produto, produto, tipo, sabor, ong, fkCadastro) {
  
  var instrucaoSql = `INSERT INTO doacao (qtd_produto, produto, tipo, sabor, ong, fkCadastro) VALUES ('${qtd_produto}', '${produto}','${tipo}','${sabor}','${ong}','${fkCadastro}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT 
                        SUM(qtd_produto) as qtd_produto, 
                        sabor FROM doacao
                      GROUP BY sabor;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarKPI() {
  var instrucaoSql = `select COUNT(fkCadastro) as quantidade_doada, sum(qtd_produto) as quantidade_total_doada from doacao;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function listarKPI_individual(fkCadastro) {
  var instrucaoSql = `select COUNT(fkCadastro) as quantidade_doada, sum(qtd_produto) as quantidade_total_doada from doacao where fkCadastro = ${fkCadastro} group by fkCadastro ;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarProduto,
  cadastrar,
  listar,
  listarKPI,
  listarKPI_individual
}
