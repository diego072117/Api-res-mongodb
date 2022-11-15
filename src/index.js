const app = require('./app')

/*---------------PUERTOLOLCITO---------------*/
app.listen(app.get("puertoLolcito"), () => {
  console.log(`Lolcito en linea ${app.get("puertoLolcito")}`)
  console.log("Nombre de la aplicacion", app.get("name"))
})
