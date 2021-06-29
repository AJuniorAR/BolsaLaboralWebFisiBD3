const mongoose=require('mongoose');

const EmpresaSchema=new mongoose.Schema({
    nombre:String,
    ruc:String,
    direccion:String,
    contacto:String
});

module.exports=mongoose.model('Empresas',EmpresaSchema);
