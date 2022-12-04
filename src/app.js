
const express = require('express')
const morgan = require("morgan")
const conexionDB = require("./conexion")
const routerLinea = require('./routes/lineas.routes')
const routerTipoCampeon = require('./routes/tipoCampeon.routes')
const routerPersonaje = require('./routes/personaje.routes')
const app = express()

/*--------------CONEXION DB---------------*/
conexionDB()



/*---------------CONFIGURACION---------------*/
app.set("name","api-res-lolcito-nodejs")
app.set("puertoLolcito", process.env.port || 2107)

app.use( express.json() )

//middleware
app.use(express.json())
app.use(morgan("dev"))


/*---------------RUTAS---------------*/
app.use(express.static("public"))

app.use("/api/linea", routerLinea )
app.use("/api/tipoCampeon", routerTipoCampeon)
app.use("/api/personaje", routerPersonaje)


module.exports = app;
