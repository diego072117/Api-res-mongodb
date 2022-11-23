const Linea = require('../Models/Linea')


/*---------------GET---------------*/
exports.find = async (req, res) => {
    
    try {
        const linea = await Linea.find()
        res.json(linea)
    } catch (error) {
        res.json(error)
    }

}


/*---------------POST---------------*/

exports.insert = async (req, res) => {

    try {

        const { tipoLinea, descripcion } = req.body
        console.log(tipoLinea)

        if (tipoLinea && descripcion) {


            const nuevaLinea = new Linea({ tipoLinea, descripcion })
            await nuevaLinea.save()
         

            res.json({mensaje:"Registro insertado", id: nuevaLinea._id})

        }else{
            res.json({isOk: false, mensaje:"Datos requeridos"})
        }


    } catch (error) {
        res.json(error)
    }
}

/*---------------PUT---------------*/

exports.update = (req, res) => {

    const idLinea = req.params.idLinea

    console.log(idLinea)

    res.json("Datos recibidos para actualizar")
}

/*---------------DELETE---------------*/

exports.drop = async (req, res) => {

    try {
        const idLinea = req.params.idLinea

    console.log(idLinea)
    const drop = await Linea.findByIdAndDelete(idLinea)

    res.status(200).json({mensaje:"Registro eliminado", isOK: true})
    } catch (error) {
        res.status(500).json(error)
        
    }
}

