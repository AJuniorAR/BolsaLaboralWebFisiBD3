const express = require("express");
const ruta = express.Router();


const {
  getOfertaLaboralById,
  getOfertasLaborales,
  crearOfertaLaboral,
  updateOfertaLaboral,
  deleteOfertaLaboral,
} = require("../controllers/ofertaLaboral");

ruta
    .route('/')
    .get(getOfertasLaborales)
    .post(crearOfertaLaboral)
ruta
    .route('/:id')
    .get(getOfertaLaboralById)
    .put(updateOfertaLaboral)
    .delete(deleteOfertaLaboral)

module.exports = ruta;
