import React,{Fragment,useState,useEffect} from "react";
import Navbar from "../components/Navbar";
import List from "../components/List";
import Form from "../components/Form";

function ContactList(props) {

  console.log(props.accountC)
  console.log(props.tokenC)

  const [contact,setContact] = useState({
    nombre: '',
    apellido: '',
    celular: '',
    ciudad: '',
    correo: '',
    direccion: '',
  })
  const [contacts,setContacts] = useState([])

  const [listUpdated,setListUpdated] = useState(false)
 
  const requestInit = {
    method: 'GET',
    headers: {'Content-Type': 'application/json',
    Authorization: props.tokenC},
}
const getContacts = () => {
  fetch('http://localhost:4000/api/contacts/'+props.accountC.id,requestInit)
  .then(res =>res.json())
  .then(res =>setContacts(res))
}

  useEffect(() =>{
  
    getContacts()
    setListUpdated(false)
  },[listUpdated])

  return (
    <Fragment>
      <Navbar brand='Contact List App'></Navbar>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign:'center'}}>Contact List</h2>
            <List contact={contact} token = {props.tokenC} setContact={setContact} contacts= {contacts} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-5">
          <h2 style={{textAlign:'center'}}>Contact Form</h2>
          <Form contact={contact} account={props.accountC} token = {props.tokenC} setContact={setContact}  refresh={()=>{getContacts()}} update={setListUpdated}   />
          </div> 
        </div>
      </div>
    </Fragment>
  );
}

export default ContactList;
