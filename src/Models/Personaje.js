const { Schema, model } = require("mongoose");

const PersonajeSchema = new Schema({

    nombre: {
        type: String,
        require: true
    },
    linea: [{
        type: Schema.Types.ObjectId,
        ref: 'Linea'
    }],
    tipo: [{
        type: Schema.Types.ObjectId,
        ref: 'TipoCampeon'
    }],
    estado: {
        type: Boolean,
        default: true
    }

})

module.exports = model("Personaje", PersonajeSchema)