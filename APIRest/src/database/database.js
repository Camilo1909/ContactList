import config from "./../config";
import  sequelize  from "sequelize";

const database = new sequelize(config.database,config.user,config.password,{
    host: config.host,
    dialect: config.dialect
});

module.exports = database;