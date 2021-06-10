const { Router } = require("express");
const express = require("express");
const ruta = express.Router();

const { crearEmpresa,getEmpresa,getEmpresaById,deleteEmpresa,updateEmpresa} = require("../controllers/empresa");

ruta
    .route("/")
    .post(crearEmpresa)
    .get(getEmpresa)
    ;
ruta
    .route("/:id")
    .get(getEmpresaById)
    .put(updateEmpresa)
    .delete(deleteEmpresa);

module.exports = ruta;
