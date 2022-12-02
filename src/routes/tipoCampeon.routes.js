const { Router } = require("express")
const controllerTipoCampeon = require('../controllers/tipoCampeon.controller')
const routerTipoCampeon = Router()

/*---------------GET---------------*/

routerTipoCampeon.get('/', controllerTipoCampeon.find)

/*---------------POST---------------*/

routerTipoCampeon.post('/', controllerTipoCampeon.insert)

/*---------------PUT---------------*/

routerTipoCampeon.put('/:idTipoCampeon', controllerTipoCampeon.update)

/*---------------DELETE---------------*/

routerTipoCampeon.delete('/:idTipoCampeon', controllerTipoCampeon.drop)

module.exports = routerTipoCampeon