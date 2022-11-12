import React from "react";

const Navbar = ({brand})=>{
    const signOff = async (e) => {
        e.preventDefault()
        window.location.href = "/";
      };
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
                <button className="btn btn-danger" onClick={signOff}>Cerrar Sesion</button>
            </div>
        </nav>
    );
}

export default Navbar;