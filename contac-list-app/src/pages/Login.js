import React, {useState} from "react";
import './../css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useNavigate} from "react-router-dom"
import {Button, FormGroup,Input,Label,Modal,ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

function Login(props) {

    const navigate = useNavigate()
    const [open,setOpen] =useState(false);

    const [datos,setDatos] = useState({
        usuario: "",
        contraseña: ""
    });


    const navigateAprobado = () => {
        navigate("/list",{replace:true})
    }
    const openRegister =(e)=>{
        e.preventDefault()
        setOpen(!open)
        console.log(open)
    }

    const handleChange = (e) => {
        let {name,value} = e.target;
        let newDatos = {...datos,[name]:value};
        setDatos(newDatos);
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (usuario === '' || contraseña === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        }

        fetch('http://localhost:4000/api/users/signin',requestInit)
        .then(res => res.json())
        .then(res => {
            props.account(res.user)
            props.token(res.token)
            if(res.user.usuario === datos.usuario){
             
               // window.location.href = '/list'
                navigateAprobado();
            
            }else{
                console.log("No entras")
            }
        })    
     
        setDatos({
            usuario: "",
        contraseña: ""
        })
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()
        if (usuario === '' || contraseña === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        }

        fetch('http://localhost:4000/api/users/signup',requestInit)
        .then(res => res.json())    
        setDatos({
            usuario: "",
        contraseña: ""
        })
        setOpen(!open)
    }

    
        return(
            <form>
                <div className="containerPrincipal">
                <h2 style={{textAlign:'center'}}>Contact List</h2>
                    <div className="containerSecundario">
                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">Usuario</label>
                            <input name="usuario" onChange={handleChange} type = "text" id= "usuario" value={datos.usuario} className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contraseña" className="form-label">Contraseña</label>
                            <input name="contraseña" onChange={handleChange} type = "password" id= "contraseña" value={datos.contraseña} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit} >Iniciar Sesion</button>
                        <div></div>
                        <button type="submit" className=" btn btn-dark" onClick={openRegister} >Registrarme</button>
                        
                    </div>
                    <Modal isOpen={open}>
            <ModalHeader>
                Registro
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Usuario</Label>
                    <Input name="usuario" type = "text" id= "usuario" value={datos.usuario} onChange={handleChange}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Contraseña</Label>
                    <Input name="contraseña" type = "password" id= "contraseña" value={datos.contraseña} onChange={handleChange}></Input>
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSubmit2}>Registrarme</Button>
                <Button color="secondary" onClick={openRegister}>Cancelar</Button>
            </ModalFooter>
        </Modal>
                </div>
            </form>
        );
    }
   

export default Login;