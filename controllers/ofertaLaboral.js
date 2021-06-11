const ofertaLaboralSchema = require("../models/OfertaLaboral");
const ErrorResponse = require("../helper/errorResponse");

exports.getOfertasLaborales = async (req, res, next) => {
  try {
    const ofertaLaboralLista = await ofertaLaboralSchema.find();
    res.status(200).json(ofertaLaboralLista);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 404)
    );
  }
};
exports.getOfertaLaboralById = async(req, res, next) => {
  try {
    const ofertaLaboralUnique = await ofertaLaboralSchema.findById(
      req.params.id
    );

    if (!ofertaLaboralUnique) {
      return next(new ErrorResponse("No se pudo encontrar libro", 404));
    }

    res.status(200).json(ofertaLaboralUnique);
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 404)
    );
  }
};
exports.crearOfertaLaboral = async(req, res, next) => {
  try {
    const ofertaLaboralUnique = await ofertaLaboralSchema.create(req.body);

    res.status(200).json({
      status: 200,
      data: ofertaLaboralUnique,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 404)
    );
  }
};
exports.updateOfertaLaboral = async(req, res, next) => {
  try {
    const ofertaLaboralUnique = await ofertaLaboralSchema.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    res.status(200).json({
      status: 200,
      data: ofertaLaboralUnique,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 404)
    );
  }
};
exports.deleteOfertaLaboral = async(req, res, next) => {
  try {
    const ofertaLaboralUnique = await ofertaLaboralSchema.findByIdAndDelete(
      req.params.id
    );

    if (!ofertaLaboralUnique) {
      return next(new ErrorResponse("No existe el libro", 400));
    }

    res.status(200).json({
      status: 200,
      data: ofertaLaboralUnique,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request" + err.message, 404)
    );
  }
};
