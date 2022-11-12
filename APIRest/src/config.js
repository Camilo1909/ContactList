import {config} from "dotenv";

config();

export default{
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD || "",

    secret: process.env.AUTH_SECRET || "secret",
    expires: process.env.AUTH_EXPIRES || "24h"
}