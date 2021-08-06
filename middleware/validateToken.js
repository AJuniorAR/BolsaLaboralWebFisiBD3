const Usuario =require("../models/Usuario") ;

const jwt=require("jsonwebtoken");
const Role = require("../models/Role");

const verifyToken=async(req,res,next)=>{
    const  token =req.header('auth-token');
    if(!token)return res.status(401).json({ error: 'Acceso denegado' })

    try {
        const verified=jwt.verify(token,process.env.TOKEN_SECRET);
        req.userId = verified.id;
        const user =await Usuario.findById(req.userId,{password: 0})
        console.log(user);
        if (!user)return res.status(404).json({message:'no user found'})
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
};
const isEstudiante=async(req,res,next)=>{
    const user=await Usuario.findById(req.userId)
    const roles=await Role.find({_id:{$in:user.roles}})
    for(let i=0;i<roles.length;i++){
        if (roles[i].name==="estudiante") {
            next();
            return;
        }
    }
    console.log(roles);
    return res.status(403).json({message:"Requiere rol usuario estudiante"});
}

const isOfertador=async(req,res,next)=>{
    
}
module.exports=Object.freeze({
    verifyToken:verifyToken,
    isEstudiante:isEstudiante
})