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
    }

})

module.exports = model( "Linea", LineaSchema )