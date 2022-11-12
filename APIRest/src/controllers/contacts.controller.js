import Contact from "../models/Contacts";
import {getConnection} from "./../database/database";

const getContacts=async(req,res)=>{
    const {id} = req.params;

    const contacts = await Contact.findAll({
        where:{
            userId:id
        }
    })
    res.json(contacts);
};


const addContact=async(req,res)=>{
    
    try{
        const {id} = req.params;
        const {
            nombre,apellido,celular,ciudad,correo,direccion
        } = req.body;

       // if(nombre == undefined || apellido == undefined || celular == undefined || ciudad == undefined || correo == undefined || direccion == undefined){
         //   res.status(400).json({message: "Bad Request. Please fill all fiel"}));
        //}
      const contact = await Contact.create({userId:id, ...req.body});
        res.json(contact);
    }catch(error){
        res.status(500);
        res.send(error.message);
    } 
};

const updateContact=async(req,res)=>{
    try{
        const {id} = req.params;
        const {
            nombre,apellido,celular,ciudad,correo,direccion
        } = req.body;
        if(nombre == undefined || apellido == undefined || celular == undefined || ciudad == undefined || correo == undefined || direccion == undefined){
            res.status(400).json({message: "Bad Request. Please fill all fiel"});
        }
        const contact = await Contact.update({nombre,apellido,celular,ciudad,correo,direccion},
            {
                where:{
                    id
                }
            });
        console.log(contact);
        res.json(contact);
    }catch(error){
        res.status(500);
        res.send(error.message);
    } 
};

const deleteContact=async(req,res)=>{
    try{
        const {id} = req.params;
        const contact = await Contact.destroy({
            where: {
                id
            }
        });
        res.json(contact);
    }catch(error){
        res.status(500);
        res.send(error.message);
    } 
};

export const methods = {
    getContacts,
    addContact,
    updateContact,
    deleteContact
};