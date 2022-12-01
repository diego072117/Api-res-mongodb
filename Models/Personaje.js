const { Schema, model } = require("mongoose");

const PersonajeSchema = new Schema({

    nombre: {
        type: String,
        require: true
    },
    tipo: [{
        type: Schema.Types.Number,
        ref: Tipo
    }],
    linea: [{
        type: Schema.Types.Number,
        ref: Linea
    }]

})

module.exports = model("Personaje", PersonajeSchema)