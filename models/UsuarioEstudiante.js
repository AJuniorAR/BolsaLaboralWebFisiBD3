const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const EstudianteSchema = new mongoose.Schema({
    emailInstitucional:String,
    centroDeEstudios:String,
    ciclo:Number,
    aplying: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Ofertas_Laborales",
      },
    ],
  }, {collection: 'usuarios_estudiante', timestamps: {createdAt: 'created', updatedAt: 'updated'}}); // <- indico que usará la colección 'usuarios_estudiante'
  // creo el modelo de datos

  EstudianteSchema.plugin(uniqueValidator,{message: 'The {PATH} is either not valid or duplicated'});
  module.exports = mongoose.model('UsuarioEstudiante', EstudianteSchema);