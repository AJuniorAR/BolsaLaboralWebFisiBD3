const ErrorResponse = require("../helper/errorResponse");
const Usuario = require("../models/Usuario");
const UsuarioEstudiante=require("../models/UsuarioEstudiante");



  exports.postularOferta = async (req, res, next) => {
    try {
      const usuario1 = await Usuario.findById(
        req.params.id
      );
      console.log(usuario1.estudiante);
      var id= usuario1.estudiante;
      const updatedUser= await UsuarioEstudiante.updateOne(
        {_id:id},{
          $addToSet:{
            aplying:req.body.aplying
          }
        }
      );
      if (!updatedUser) {
        return next(
          new ErrorResponse(
            "La oferta no existe con este id: " + req.params.id,
            404
          )
        );
      }
      res.status(200).json({
        status: 200,
        data: updatedUser
      });
    } catch (err) {
      
      next(
        new ErrorResponse(
          "La oferta no existe con este id: " + req.params.id,
          404
        )
      );
    }
  };

  exports.listarUsuarios = async(req, res, next) => {
    Usuario.find((err, usuarios) => {
      if(err) {
        return res.status(400).json({
          error: 'Server error: ' + err
        });
      }
      res.json(usuarios);
    })
    .populate('estudiante', 'emailInstitucional centroDeEstudios ciclo aplying')
    .populate('ofertador','emailRegular jobPosting');
  }