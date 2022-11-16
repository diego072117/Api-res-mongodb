
/*---------------GET---------------*/
 exports.find = (req, res) => {
    const linea =[
        {
            
            tipoLinea: "Mid",
            descripcion:"En esta linea se jugaran magos y asesinos"
        },
        {
            
            tipoLinea:"Top",
            descripcion:"En esta linea se juganar luchadores y tanques"
        },
          
        {
            
            tipoLinea:"Jungla",
            descripcion:"En esta linea se jugara para apoyar al equipo"
        },
        {
            
            tipoLinea:"Adc",
            descripcion:"En esta linea jugaran los tiradores campeones de rango"
        },
        {
            
            tipoLinea:"Suport",
            descripcion:"El soporte es el que cuida al adc"
        }
    ]
    res.json(linea)
}


/*---------------POST---------------*/

exports.insert = (req, res) => {

    const { tipoLinea, descripcion } = req.body

    console.log(tipoLinea)
   
    res.json("Datos recibidos")
}

/*---------------PUT---------------*/

exports.update = (req, res) => {

    const idLinea = req.params.idLinea

    console.log(idLinea)
   
    res.json("Datos recibidos para actualizar")
}

/*---------------DELETE---------------*/

exports.drop =(req, res) => {

    const idLinea = req.params.idLinea

    console.log(idLinea)
   
    res.json("id recibido para eliminar")
}

