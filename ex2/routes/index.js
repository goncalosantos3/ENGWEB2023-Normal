var express = require('express');
var router = express.Router();
var axios = require('axios')

/*                                  GET                                    */

// Página principal
router.get('/', function(req, res) {
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas')
    .then(dados => {
      console.log(dados.data[0])
      res.render('index', {plantas: dados.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/:id', function(req, res){
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas/' + req.params.id)
    .then(dados => {
      console.log(dados.data[0])
      res.render('planta', {planta: dados.data[0], d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

router.get('/especies/:id', function(req, res){
  var data = new Date().toISOString().substring(0,16)
  axios.get('http://localhost:15030/plantas?especie=' + req.params.id)
    .then(dados => {
      res.render('especie', {plantas: dados.data, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
})

module.exports = router;
