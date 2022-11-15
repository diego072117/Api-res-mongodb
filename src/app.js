
const express = require('express')
const app = express()


//configuracion 
app.set("name","api-res-lolcito-nodejs")
app.set("puertoLolcito", process.env.port || 2107)

app.use( express.json() )

app.get('/', (req, res) => {
  res.send('Hello World!')
})



module.exports = app;
