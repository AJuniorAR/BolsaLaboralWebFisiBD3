const Joi = require("@hapi/joi");

const schemaRegister = Joi.object({
  firstName: Joi.string().min(3).max(1024).required(),
  lastName: Joi.string().min(3).max(1024).required(),
  name: Joi.string().min(3).max(1024).required(),
  email: Joi.string().min(6).max(1024).email(),
  password: Joi.string().min(6).max(1024).required(),
  estudiante: Joi.object(),
  ofertador: Joi.object(),
  roles: Joi.object(),
});

const schemaRegister2 = Joi.object({
  emailInstitucional: Joi.string().min(6).max(1024).required().email(),
  centroDeEstudios: Joi.string().min(1).max(999).required(),
  ciclo: Joi.number().required(),
});

const schemaRegister3 = Joi.object({
  emailRegular: Joi.string().min(6).max(1024).required().email(),
  jobPosting: Joi.object(),
});

const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

module.exports={
    schemaRegister,
    schemaRegister2,
    schemaRegister3,
    schemaLogin
}