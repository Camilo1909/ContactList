import React , {useState}from "react";
import {Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import ContactList from "../pages/ContactList";

function App(){

    const [account,setAccount]=useState("");

    const [token, setToken]=useState();

    return(
        <div className="page">
        <Routes>
            <Route  index element={<Login account={setAccount}  token ={setToken} /> } />
            <Route exact={true} path="/list" element={<ContactList accountC={account} tokenC={token} />} />
        </Routes>
        </div>
    );
}

export default App;