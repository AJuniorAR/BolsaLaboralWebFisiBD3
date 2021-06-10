const express = require("express");
const ruta = express.Router();


const {
  getOfertaLaboral,
  getOfertasLaborales,
  crearOfertaLaboral,
  actualizarOfertaLaboral,
  eliminarOfertaLaboral,
} = require("../controllers/ofertaLaboral");

ruta
    .route('/')
    .get(getOfertasLaborales)
    .post(crearOfertaLaboral)
ruta
    .route('/:id')
    .get(getOfertaLaboral)
    .put(actualizarOfertaLaboral)
    .delete(eliminarOfertaLaboral)

module.exports = ruta;
