const { Schema, model } = require("mongoose");

const PersonajeSchema = new Schema({

    nombre: {
        type: String,
        require: true
    },
    tipo: [{
        type: Schema.Types.ObjectId,
        ref: 'TipoCampeon'
    }],
    linea: [{
        type: Schema.Types.ObjectId,
        ref: 'Linea'
    }]

})

module.exports = model("Personaje", PersonajeSchema)