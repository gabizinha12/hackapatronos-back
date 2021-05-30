const router = require('express').Router();
const path = require("path");
const fs = require("fs")
const carbone = require('carbone');
const funcionario_dados = require('./funcionarios_mock.json')
const empresa_dados = require('./empresas_mock.json')
const burnout_dados = require('./burnout_mock.json');

router.get('/funcionarios', (req, res) => {
  const file = fs.readFileSync(path.resolve("./funcionarios_mock.json"));
  console.log(JSON.parse(file))
  res.send(file)
})
router.get('/empresas', (req, res) => {
  const file = fs.readFileSync(path.resolve("./empresas_mock.json"));
  console.log(JSON.parse(file))
  res.send(file)
})
router.get('/burnout', (req, res) => {
  const file = fs.readFileSync(path.resolve("./burnout_mock.json"));
  console.log(JSON.parse(file))
  res.send(file)
})
router.get('/relatorio', (req, res) => {
// Data to inject
var data = {
  "name": "José alves dos santos",
  "empresa": "Rodoalves SA",
  "burnout": "sim"
};

 carbone.render('./node_modules/carbone/examples/simple.odt', data, function(err, result){
  if (err) {
    return console.log(err);
  }
  fs.writeFileSync('result.odt', result);
});
res.send(data)
})
module.exports = router;