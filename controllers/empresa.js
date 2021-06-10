const Empresa = require("../models/Empresa");

exports.crearEmpresa = async (req, res, next) => {
  try {
    const empresaData = await Empresa.create(req.body);
    res.status(200).json({
      status: 200,
      data: empresaData,
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.getEmpresa = async (req, res, next) => {
  try {
    const empresaLista = await Empresa.find();
    res.status(200).json({
      empresaLista,
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.getEmpresaById = async (req, res, next) => {
  try {
    const empresa = await Empresa.findById(req.params.id);
    res.status(200).json({
      empresa,
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.updateEmpresa = async (req, res, next) => {
  try {
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body);
    if (!empresa) {
      return res.status(400).json({ status: 400 });
    }
    res.status(200).json({
      status: 200,
      data: empresa,
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};

exports.deleteEmpresa = async (req, res, next) => {
  try {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    if (!empresa) {
      return res.status(400).json({ status: 400 });
    }
    res.status(200).json({
      status: 200,
    });
  } catch (err) {
    res.status(400).json({ status: 400, mensaje: err });
  }
};
