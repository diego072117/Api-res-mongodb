
const { Router } = require("express")
const controllerPersonaje = require('../controllers/personaje.controller')
const routerPersonaje = Router()

/*---------------GET---------------*/

routerPersonaje.get('/', controllerPersonaje.find)

/*---------------GET---------------*/

routerPersonaje.get('/:id', controllerPersonaje.findid)

/*---------------POST---------------*/

routerPersonaje.post('/:idcamp/:idline', controllerPersonaje.insert)

/*---------------PUT---------------*/

routerPersonaje.put('/:idpers', controllerPersonaje.update)

/*---------------DELETE---------------*/

routerPersonaje.delete('/:idpers', controllerPersonaje.drop)

module.exports = routerPersonaje
