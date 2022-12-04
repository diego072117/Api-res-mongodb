const express = require('express');
const routerVistas = express.Router();

/*-----------VISTA PRINCIPAL------------*/

routerVistas.get('/', (req, res) => {
    res.render('inicio')
})

/*-------------VISTA CAMPEON-------------*/

routerVistas.get('/campeon', (req, res) => {
    res.render('campeon')
})

/*--------------VISTA LINEA--------------*/

routerVistas.get('/linea', (req, res) => {
    res.render('linea')
})

/*------------VISTA PERSONAJE------------*/

routerVistas.get('/personaje', (req, res) => {
    res.render('personaje')
})

module.exports = routerVistas