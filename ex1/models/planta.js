const mongoose = require('mongoose')

var plantaSchema = new mongoose.Schema({
    _id: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    'Espécie': String,
    Origem: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    'Implantação': String,
    Gestor: String,
    'NúmerodeRegisto': Number,
    'Códigoderua': Number,
    'NomeCientífico': String,
    'DatadePlantação': String,
    'Datadeactualização': String,
    'Númerodeintervenções': Number
});

module.exports = mongoose.model('planta', plantaSchema)