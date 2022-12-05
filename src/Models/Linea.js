const { Schema, model } = require("mongoose");

const LineaSchema = new Schema({

    tipoLinea: {
        type : String,
        require: true
    },
    descripcion: {
        type : String,
        require: true
    } ,
    estado:{
        type: Boolean,
        default: true
    },
    personaje: [{
        type: Schema.Types.ObjectId,
        ref: 'Personaje'
    }]

})

module.exports = model( "Linea", LineaSchema )