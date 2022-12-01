const mongoose = require('mongoose');

const conexionDB = async ()=>{

    try {
      const campeonesDB = await  mongoose.connect('mongodb://localhost:27017/campeones');
        console.log(`Exito`, campeonesDB.connection.name)

    } catch (error) {
        console.log(error)
    }

}

module.exports = conexionDB