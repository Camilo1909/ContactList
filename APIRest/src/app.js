import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./database/database"; require("./models/Association");
//Routes
import contactsRoutes from "./routes/contacts.routes"
import usersRoutes from "./routes/auth.routes"
const app = express();

//Settings
app.set("port",4000);
(async () => {
    try {
        await db.authenticate()
        await db.sync();
        console.log("Connect to database")
    } catch (error) {
        throw new Error(error);
    }
})();

//Middlewares
import auth from "./Middlewares/auth"
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users",usersRoutes)
app.use("/api/contacts",auth,contactsRoutes)


export default app;