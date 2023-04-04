const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const VeiculoSchema = new Schema({
    id: ObjectId,
    name: String,
    type: String,
    preco: String,

});

const veiculosModel = mongoose.model('veiculos', VeiculoSchema);
module.exports = veiculosModel;
