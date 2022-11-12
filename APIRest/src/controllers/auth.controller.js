import User from "./../models/Users"
import jwt from "jsonwebtoken"
import authConfig from "./../config"


const signIn = async(req,res)=>{

    let { usuario,contraseña} = req.body;

    User.findOne({
        where: {
            usuario: usuario
        }
    }).then(user=>{
        if(!user){
            res.status(400)
        }else{
            if(user.contraseña == contraseña){
                let token = jwt.sign({user: user},authConfig.secret,{
                    expiresIn: authConfig.expires
                });
    
                res.json({
                    user:user,
                    token: token
                });
            }else{
                res.status(400).json({message: "Bad Password"})
            }
          
        }

    }).catch(err =>{
        res.status(500);
        res.send(err.message);
    })


}

const signUp = async(req,res)=>{
    try{

        if(req.body.usuario == undefined || req.body.contraseña == undefined){
            res.status(400).json({message: "Bad Request. Please fill all fiel"});
        }
        await User.create({usuario: req.body.usuario ,contraseña: req.body.contraseña}).then(user =>{
            let token = jwt.sign({user: user},authConfig.secret,{
                expiresIn: authConfig.expires
            });

            res.json({
                token: token
            });
        
        });
    }catch(error){
        res.status(500);
        res.send(error.message);
    } 

}

export const methods = {
    signIn,
    signUp
};