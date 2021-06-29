const express = require("express");
const ruta = express.Router();


const {
  getOfertaLaboralById,
  getOfertasLaborales,
  crearOfertaLaboral,
  updateOfertaLaboral,
  deleteOfertaLaboral,
  pagination
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
ruta  
    .route('/pagination')
    .post(pagination)
module.exports = ruta;
