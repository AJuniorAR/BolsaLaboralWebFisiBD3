const { postularOferta,listarUsuarios } = require("../controllers/usuario");
const express = require("express");
const ruta = express.Router();

ruta
    .route('/postular/:id')
    .patch(postularOferta);
ruta
    .route('/usuarios')
    .get(listarUsuarios);
module.exports = ruta;