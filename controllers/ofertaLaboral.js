exports.getOfertasLaborales=(req,res,next)=>{
    res.status(200).json({status:200,mensaje:'Se proceso correctamente'});
}
exports.getOfertaLaboral=(req,res,next)=>{
    res.status(200).json({status:200,mensaje:'Se devuelve oferta laboral por id'});
}
exports.crearOfertaLaboral=(req,res,next)=>{
    res.status(200).json({status:200,mensaje:'Se ha creado oferta laboral correctamente'});
}
exports.actualizarOfertaLaboral=(req,res,next)=>{
    res.status(200).json({status:200,mensaje:'Se ha actualizadooferta laboral por id'});
}
exports.eliminarOfertaLaboral=(req,res,next)=>{
    res.status(200).json({status:200,mensaje:'Se ha eliminado oferta laboral por id'});
}