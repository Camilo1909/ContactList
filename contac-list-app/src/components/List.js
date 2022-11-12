import React from "react";

const List = ({token,contact,setContact,contacts,setListUpdated}) => {

    const handleDelete = id => {
      const requestInit = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json',
        Authorization: token}
    }
    fetch('http://localhost:4000/api/contacts/'+id,requestInit)
    .then(res =>res.text())
    .then(res =>console.log(res))

    setListUpdated(true)
    }

    let{nombre,apellido,celular,ciudad,correo,direccion} = contact

    const handleUpdate = id => {
      if (nombre === '' || apellido === '' || celular === '' || ciudad === '' || correo === '' || direccion === '' ) {
        alert('Todos los campos son obligatorios')
        return
    }
      const requestInit = {
        method: 'PUT',    
        headers: {'Content-Type': 'application/json',
        Authorization: token},
        body: JSON.stringify(contact)
    }
    fetch('http://localhost:4000/api/contacts/'+id,requestInit)
    .then(res =>res.text())
    .then(res =>console.log(res))

    setContact({
      nombre: '',
      apellido: '',
      celular: '',
      ciudad: '',
      correo: '',
      direccion: '',
    })

    setListUpdated(true)
    }
  
    return(
        <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Celular</th>
          <th>Ciudad</th>
          <th>Correo</th>
          <th>Direccion</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key = {contact.id}>
            <td>{contact.nombre}</td>
            <td>{contact.apellido}</td>
            <td>{contact.celular}</td>
            <td>{contact.ciudad}</td>
            <td>{contact.correo}</td>
            <td>{contact.direccion}</td>
            <td>
              <div className="mb-3">
                <button onClick={()=> handleDelete(contact.id)}className="btn btn-danger">Eliminar</button>
              </div>
              <div className="mb-3">
                <button onClick={()=> handleUpdate(contact.id)}className="btn btn-dark">Editar</button>
              </div>
            </td>
        </tr>
        ))}
        
      </tbody>
    </table>
    );
}

export default List;