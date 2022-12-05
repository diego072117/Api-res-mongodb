const { Schema, model } = require("mongoose");

const TipoCampeonSchema = new Schema({

    tipoTipoCampeon: {
        type : String,
        require: true
    },
    estado:{
        type: Boolean,
        default: true
    },
    personaje: [{
        type: Schema.Types.ObjectId,
        ref: 'Personaje'
    }]

})

module.exports = model( "TipoCampeon", TipoCampeonSchema )