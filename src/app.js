
const express = require('express')
const routerLinea = require('./routes/lineas.routes')
const app = express()


/*---------------CONFIGURACION---------------*/
app.set("name","api-res-lolcito-nodejs")
app.set("puertoLolcito", process.env.port || 2107)

app.use( express.json() )


/*---------------RUTAS---------------*/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/linea", routerLinea )



module.exports = app;
