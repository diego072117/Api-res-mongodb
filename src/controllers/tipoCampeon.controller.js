const TipoCampeon = require('../Models/TipoCampeon')


/*---------------GET---------------*/
exports.find = async (req, res) => {
    
    try {
        const tipoCampeon = await TipoCampeon.find({estado:true})
        res.json(tipoCampeon)
    } catch (error) {
        res.json(error)
    }

}


/*---------------POST---------------*/

exports.insert = async (req, res) => {

    try {

        const { TipoCampeon, descripcion } = req.body
        console.log(TipoCampeon)

        if (TipoCampeon && descripcion) {


            const nuevoTipoCampeon = new TipoCampeon({ TipoCampeon, descripcion })
            await nuevoTipoCampeon.save()
         

            res.json({mensaje:"Registro insertado", id: nuevoTipoCampeon._id})

        }else{
            res.json({isOk: false, mensaje:"Datos requeridos"})
        }


    } catch (error) {
        res.json(error)
    }
}

/*---------------PUT---------------*/

exports.update = async (req, res) => {


    try {

        const idTipoCampeon = req.params.idTipoCampeon
        const datos = req.body 

        if (idTipoCampeon && datos) {
            await TipoCampeon.findByIdAndUpdate(idTipoCampeon, datos)
            res.json("Registro actualizado")
        }else{
            res.json({mensaje:"Datos insuficientes"})
        }
 
    } catch (error) {
        res.json(error)
    }

   
}

/*---------------DELETE---------------*/

exports.drop = async (req, res) => {

    try {
        const idTipoCampeon = req.params.idTipoCampeon

    console.log(idTipoCampeon)
    const drop = await TipoCampeon.findByIdAndUpdate(idTipoCampeon, {estado:false})

    res.status(200).json({mensaje:"Registro eliminado", isOK: true})
    } catch (error) {
        res.status(500).json(error)
        
    }
}