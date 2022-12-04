
const { Router } = require("express")
const controllerLinea = require('../controllers/lineas.controller')
const routerLinea = Router()

/*---------------GET---------------*/

routerLinea.get('/', controllerLinea.find)

/*---------------GET---------------*/

routerLinea.get('/:idLinea', controllerLinea.findid)

/*---------------POST---------------*/

routerLinea.post('/', controllerLinea.insert)

/*---------------PUT---------------*/

routerLinea.put('/:idLinea', controllerLinea.update)

/*---------------DELETE---------------*/

routerLinea.delete('/:idLinea', controllerLinea.drop)

module.exports = routerLinea
