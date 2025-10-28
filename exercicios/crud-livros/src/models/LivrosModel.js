const mongoose = require('mongoose')
// schema
const schema = new mongoose.Schema(
    //estrurtura de registro
     {
    titulo: {type: String, required: true},
    autor: {type: String, required: true},
    editora: {type: String, required: true},
    ano: {type: Date, required: true},
    preco: {type: String, required: true}
},
//  parametros
{
    timestamps: true
}

)


//  modelo
const LivroModel = mongoose.model('Pessoas', schema)


// Exportar o modelo
module.exports = LivroModel