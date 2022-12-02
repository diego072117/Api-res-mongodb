const { Schema, model } = require("mongoose");

const TipoCampeonSchema = new Schema({

    tipoCampeon: {
        type : String,
        require: true
    },
    estado:{
        type: Boolean,
        default: true
    }

})

module.exports = model( "TipoCampeon", TipoCampeonSchema )