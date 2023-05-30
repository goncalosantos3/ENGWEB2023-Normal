var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

/*                                GET                                   */

router.get('/plantas', function(req, res) {
  var especie = req.query.especie
  var implant = req.query.implant

  if(especie != undefined){
    // Devolve a lista dos registos de uma espécie
    Planta.especie(especie)
      .then(resposta => {
        res.jsonp(resposta)
      })
      .catch(erro => {
        res.status(502).jsonp(erro)
      })
  }else if(implant != undefined){
    // Devolve a lista dos registos de uma implantação
    Planta.implant(implant)
      .then(resposta => {
        res.jsonp(resposta)
      })
      .catch(erro => {
        res.status(503).jsonp(erro)
      })
  }else{
    // Devolve uma lista com todos os registos
    Planta.lista()
      .then(resposta => {
        res.jsonp(resposta)
      })
      .catch(erro => {
        res.status(500).jsonp(erro)
      })
  }
});

// Devolve a lista de todas as freguesias sem repetições e ordenada alfabeticamente
router.get('/plantas/freguesias', function(req, res){
  Planta.freguesias()
    .then(resposta => {
      console.log(resposta)
      res.jsonp(resposta)
    })
    .catch(erro => {
      res.status(504).jsonp(erro)
    })
})

// Devolve a lista das espécies vegetais ordenada alfabeticamente e sem repetições
router.get('/plantas/especies', function(req, res){
  Planta.especies()
    .then(resposta => {
      res.jsonp(resposta)
    })
    .catch(erro => {
      res.status(505).jsonp(erro)
    })
})

// Devolve o registo com o identificador id
router.get('/plantas/:id', function(req, res){
  Planta.getPlanta(req.params.id)
    .then(resposta => {
      res.jsonp(resposta)
    })
    .catch(erro => {
      res.status(506).jsonp(erro)
    })
})

/*                                POST                                   */

// Adiciona um registo à BD
router.post('/plantas', function(req, res){
  Planta.addPlanta(req.body)
    .then(resposta => {
      res.jsonp(resposta)
    })
    .catch(erro => {
      res.status(507).jsonp(erro)
    })
})

// Remove o registo da BD com o identificador id
router.delete('/plantas/:id', function(req, res){
  Planta.removePlanta(req.params.id)
    .then(resposta => {
      res.jsonp(resposta)
    })
    .catch(erro => {
      res.status(508).jsonp(erro)
    })
})

module.exports = router;
