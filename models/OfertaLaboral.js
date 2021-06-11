const mongoose = require("mongoose");

const OfertaLaboralSchema = new mongoose.Schema({
  puestoDeTrabajo: {
    required: [true, "Ingrese un puesto de trabajo"],
    maxlenght: [500, "El puesto de trabajo no tiene que ser tan largo"],
    type: String,
  },
  empresa: { id: String, nombreCompeto: String },
  requerimientos: String,
  descripcion: String,
  area: String,
  ciudad: String,
  fechaInicio: Date,
  vacantes: Number,
});

module.exports = mongoose.model("OfertaLaboral", OfertaLaboralSchema);
