
const {crearUsuario,logIn} =require ('../controllers/auth.js')
const express = require("express");
const ruta = express.Router();

ruta
    .route('/register')
    .post(crearUsuario);
ruta
    .route('/logIn')
    .post(logIn);
module.exports = ruta;