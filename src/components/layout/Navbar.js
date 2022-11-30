import React from 'react'
import {NavLink,Link} from "react-router-dom";

const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div classNameName="container" style={{width:'100%'}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">ReactUser</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link"  exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/contact">Contact
                </NavLink>
              </li>
               </ul>
            
          </div>
        </div>
        <Link type="button"  className="btn btn-outline-light" style={{float:'right',marginTop:'-44px',marginRight:'4px',color:'black'}} to="/users/add">Add User</Link>
        
        </div>
      </nav>
    );
};
 export default Navbar;