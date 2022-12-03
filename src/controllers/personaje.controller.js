const Linea = require('../Models/Linea')
const Tipo = require('../Models/TipoCampeon')
const Personaje = require('../Models/Personaje')


/*---------------GET---------------*/
exports.find = async (req, res) => {

    try {

        const personaje = await Personaje.find().populate('tipo').populate('linea')

        res.status(200).json(personaje);
    } catch (error) {
        res.status(500).json(error)
    }

}

/*---------------GET---------------*/
exports.findid = async (req, res) => {

    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id).populate('linea').populate('tipo')
        console.log(personaje);
        res.status(200).json(personaje);
    } catch (error) {
        res.status(500).json(error)
    }

    // const campeon = await Tipo.findById(req.params).populate('TipoCampeon')
    // res.send(campeon)

}


/*---------------POST---------------*/

exports.insert = async (req, res) => {


    try {

        const { nombre, tipo, linea } = req.body
        //console.log(req.body)

        const idcamp = req.params.idcamp;
        const idline = req.params.idline;

        console.log(idcamp);

        console.log(idline);

        const tipoid = await Tipo.findById(idcamp)

        const lineaid = await Linea.findById(idline)
        //console.log(tipoid);

        try {
            const personajeNuevo = new Personaje({ nombre, tipo: tipoid._id, linea: lineaid._id })
            console.log(personajeNuevo);

            const savePersonaje = await personajeNuevo.save();

            tipoid.personaje = tipoid.personaje.concat(savePersonaje._id);
            await tipoid.save()

            lineaid.personaje = lineaid.personaje.concat(savePersonaje._id);
            await lineaid.save()

            console.log(savePersonaje)

            res.status(200).json(savePersonaje);


        } catch (error) {
            res.json(error)
        }



        // if (nombre ) {


        //     const personajeNuevo = new Personaje(req, res)
        //     // console.log(personajeNuevo);

        //     const tipo = await Tipo.findById(req.params)
        //     console.log(tipo);

        //     personajeNuevo.tipo = tipo;

        //     await personajeNuevo.save()

        //     tipo.personaje.push(personajeNuevo)

        //     await tipo.save()

        //     res.send(personajeNuevo)


        //     res.json({ mensaje: "Registro insertado", id: personajeNuevo._id })

        // } else {
        //     res.json({ isOk: false, mensaje: "Datos requeridos" })
        // }


    } catch (error) {
        res.json(error)
    }
}

// /*---------------PUT---------------*/

// exports.update = async (req, res) => {


//     try {

//         const idpers = req.params.idpers
//         const datos = req.body

//         if (idpers && datos) {
//             await Personaje.findByIdAndUpdate(idpers, datos)
//             res.json("Registro actualizado")
//         } else {
//             res.json({ mensaje: "Datos insuficientes" })
//         }

//     } catch (error) {
//         res.json(error)
//     }


// }

// /*---------------DELETE---------------*/

// exports.drop = async (req, res) => {

//     try {
//         const idpers = req.params.idpers

//         console.log(idpers)
//         const drop = await Personaje.findByIdAndUpdate(idpers, { estado: false })

//         res.status(200).json({ mensaje: "Registro eliminado", isOK: true })
//     } catch (error) {
//         res.status(500).json(error)

//     }
// }

