var Planta = require('../models/planta')

// Devolve a lista com todos os registos
module.exports.lista = () => {
    return Planta
        .find()
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

// Devolve o registo com o identificador id
module.exports.getPlanta = id => {
    return Planta
        .find({_id: id})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

// Lista dos registos de uma espécie
module.exports.especie = especie => {
    return Planta
        .find({Espécie: especie})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

// Lista dos registos de uma implantação
module.exports.implant = implant => {
    return Planta
        .find({Implantação: implant})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.freguesias = () => {
    return Planta
        .distinct('Freguesia')
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.especies = () => {
    return Planta
        .distinct('Espécie')
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
} 

module.exports.addPlanta = p => {
    return Planta
        .create(p)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.removePlanta = id => {
    return Planta
        .deleteOne({_id: id})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}