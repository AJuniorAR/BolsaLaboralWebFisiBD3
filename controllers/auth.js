const ErrorResponse = require("../helper/errorResponse");
const Usuario = require("../models/Usuario");
const UsuarioEstudiante = require("../models/UsuarioEstudiante");
const UsuarioEmpresa = require("../models/UsuarioEmpresa");

const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const {schemaRegister,schemaRegister2,schemaRegister3,schemaLogin}=require("../utils/schemas/usuario");

//-----------------------------------------------------------------------------------------------------------------
exports.crearUsuario = async (req, res, next) => {
  const { error } = schemaRegister.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    var user = new Usuario();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.name = req.body.name;

    if (req.body.estudiante != null) {
      const { error } = schemaRegister2.validate(req.body.estudiante);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }


      const isEmailExist = await Usuario.findOne({ email: req.body.estudiante.emailInstitucional });
      if (isEmailExist) {
        return res.status(400).json({ error: "Email ya registrado" });
      }
      
      const usuarioEstudiante1 = await UsuarioEstudiante.create(
        req.body.estudiante
      );
      user.estudiante = usuarioEstudiante1._id;
      user.email = usuarioEstudiante1.emailInstitucional;
    } else {
      const { error } = schemaRegister3.validate(req.body.ofertador);

      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }


      const isEmailExist = await Usuario.findOne({ email: req.body.ofertador.emailRegular });
      if (isEmailExist) {
        return res.status(400).json({ error: "Email ya registrado" });
      }


      const usuarioEmpresa1 = await UsuarioEmpresa.create(req.body.ofertador);
      user.ofertador = usuarioEmpresa1._id;
      user.email = usuarioEmpresa1.emailRegular;
    }

    const saltos=await bcrypt.genSalt(10);
    const passwordEncriptada=await bcrypt.hash(req.body.password,saltos);
    user.password = passwordEncriptada;
    //user.aplying=req.body.aplying;

    await user.save();
    //const usuarioUnique = await usuario.create(req.body);

    res.status(200).json({
      status: 200,
      data: user,
      data2: user.email,
    });
  } catch (err) {
    next(
      new ErrorResponse("No se pudo procesar el request " + err.message, 404)
    );
  }
};


exports.logIn=async (req, res, next) => {
    // validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    const user = await Usuario.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
    
    const token=jwt.sign({
        name:user.name,
        id:user._id
    },process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
}

//---------------------------------------------------------------------------------------
