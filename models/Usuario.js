const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const UsuarioSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    name: String,
    email: String,
    password: String,
    estudiante: {
      type: mongoose.Types.ObjectId,
      ref: "UsuarioEstudiante",
    },
    ofertador: {
      type: mongoose.Types.ObjectId,
      ref: "UsuarioEmpresa",
    },
    
  },
  {
    collection: "usuarios",
    timestamps: { createdAt: "created", updatedAt: "updated" },
  }
);

UsuarioSchema.plugin(uniqueValidator,{message: 'The {PATH} is either not valid or duplicated'});

module.exports = mongoose.model("Usuario", UsuarioSchema);
