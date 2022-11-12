import db from "../database/database";
import {DataTypes} from "sequelize";


const contact = db.define('contacts',{
    nombre:{
        type: DataTypes.STRING
    },
    apellido:{
        type: DataTypes.STRING
    },
    celular:{
        type: DataTypes.STRING
    },
    ciudad:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING,
        validate:{
            isEmail:{
              args:true,
              msg: "Ingrese una direccion de correo valida"
            }
        }
    },
    direccion:{
        type: DataTypes.STRING
    }

});

module.exports = contact;
    