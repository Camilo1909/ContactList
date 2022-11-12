import db from "./../database/database";
import {DataTypes} from "sequelize";


const user = db.define('users',{
    usuario:{
        type: DataTypes.STRING
    },
    contraseña:{
        type: DataTypes.STRING
    },
    
});

module.exports = user;
    