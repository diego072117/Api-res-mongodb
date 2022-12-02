const { Schema, model } = require("mongoose");

const TipoCampeonSchema = new Schema({

    tipoTipoCampeon: {
        type : String,
        require: true
    },
    estado:{
        type: Boolean,
        default: true
    }

})

module.exports = model( "TipoCampeon", TipoCampeonSchema )