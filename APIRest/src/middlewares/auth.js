import jwt from "jsonwebtoken"
import authConfig from "./../config"

module.exports = (req, res, next) => {

    if(!req.headers.authorization){
        res.status(401).json({msg: "Acceso no autorizado"});
    }else{
        let token = req.headers.authorization;
        jwt.verify(token,authConfig.secret,(err,decoded)=>{
            if(err){
                res.status(500).json({msg: "Ha ocurrido un problema al decodificar el token",err})
            }else{
                req.user = decoded;
                next();
            }
        })  
    }
};