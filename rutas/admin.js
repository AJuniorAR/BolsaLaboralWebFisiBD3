const express = require("express");
const { getRutaProtegida } = require("../controllers/admin");
const ruta = express.Router();

ruta
    .route('/')
    .get(getRutaProtegida);

module.exports=ruta;