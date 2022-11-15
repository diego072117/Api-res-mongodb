
/*---------------GET---------------*/

app.get('/linea', (req, res) => {
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
})


/*---------------POST---------------*/

app.post('/linea', (req, res) => {

    const { tipoLinea, descripcion } = req.body

    console.log(tipoLinea)
   
    res.json("Datos recibidos")
})

/*---------------PUT---------------*/

app.put('/linea/:idLinea', (req, res) => {

    const idLinea = req.params.idLinea

    console.log(idLinea)
   
    res.json("Datos recibidos para actualizar")
})

/*---------------DELETE---------------*/


app.delete('/linea/:idLinea', (req, res) => {

    const idLinea = req.params.idLinea

    console.log(idLinea)
   
    res.json("id recibido para eliminar")
})