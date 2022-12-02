
const { Router } = require("express")
const controllerPersonaje = require('../controllers/personaje.controller')
const routerLinea = Router()

/*---------------GET---------------*/

routerLinea.get('/', controllerPersonaje.find)

/*---------------POST---------------*/

routerLinea.post('/:_id', controllerPersonaje.insert)

/*---------------PUT---------------*/

routerLinea.put('/:_id', controllerPersonaje.update)

/*---------------DELETE---------------*/

routerLinea.delete('/:_id', controllerPersonaje.drop)

module.exports = routerLinea
