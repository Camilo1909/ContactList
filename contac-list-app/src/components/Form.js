import React from "react";

const Form = ({token,contact,setContact,account,update})=>{

    console.log(account.id)

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    let{nombre,apellido,celular,ciudad,correo,direccion} = contact

    const handleSubmit = (e) => {
        e.preventDefault();
        
 
        if (nombre === '' || apellido === '' || celular === '' || ciudad === '' || correo === '' || direccion === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            Authorization: token},
            body: JSON.stringify(contact)
        }

        fetch('http://localhost:4000/api/contacts/'+account.id,requestInit)
        .then(res =>res.json())
        .then(res =>console.log(res))
        update(true)
 

        setContact({
            nombre: '',
            apellido: '',
            celular: '',
            ciudad: '',
            correo: '',
            direccion: '',
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input value= {nombre} name="nombre" onChange={handleChange} type = "text" id= "nombre" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input value= {apellido} name="apellido" onChange={handleChange} type = "text" id= "apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="celular" className="form-label">Celular</label>
                <input value= {celular} name="celular" onChange={handleChange} type = "text" id= "celular" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="ciudad" className="form-label">Ciudad</label>
                <input value= {ciudad} name="ciudad" onChange={handleChange} type = "text" id= "ciudad" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input value= {correo} name="correo" onChange={handleChange} type = "text" id= "correo" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="direccion" className="form-label">Direccion</label>
                <input value= {direccion} name="direccion" onChange={handleChange} type = "text" id= "direccion" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    );
}

export default Form;