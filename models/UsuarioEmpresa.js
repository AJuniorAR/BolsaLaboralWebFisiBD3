const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const UsuarioEmpresaSchema = new mongoose.Schema({
    emailRegular:String,
    jobPosting: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Ofertas_Laborales",
      },
    ],
  }, {collection: 'usuarios_empresa', timestamps: {createdAt: 'created', updatedAt: 'updated'}}); // <- indico que usará la colección 'usuarios_empresa'
  // creo el modelo de datos
  UsuarioEmpresaSchema.plugin(uniqueValidator,{message: 'The {PATH} is either not valid or duplicated'});
  module.exports = mongoose.model('UsuarioEmpresa', UsuarioEmpresaSchema);