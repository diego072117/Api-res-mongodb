const mongoose = require('mongoose');

// const conexionDB = async ()=>{

//     try {
//       const campeonesDB = await  mongoose.connect('mongodb://localhost:27017/campeones');
//         console.log(`Exito`, campeonesDB.connection.name)

//     } catch (error) {
//         console.log(error)
//     }

// }


const conexionDB =  () => {
    
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology : true
    }

    try {
        mongoose.connect('mongodb+srv://Diego:1031643005@cluster0.rmppwlj.mongodb.net/campeones?retryWrites=true&w=majority')
        connectionParams

        console.log('si se pudo conectar a la base de datos');
    } catch (error) {
        console.log(error);
        console.log('no se pollo, no se conecto a la base de datos');
    }
}

module.exports = conexionDB

