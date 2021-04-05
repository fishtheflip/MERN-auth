import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () =>{
    return (
        <ul className="nav justify-content-center">
  
        <li className="nav-item">
          <Link to="/login" className="navbar-brand ">Войти</Link>
        </li>
      
        <li className="nav-item">
          <Link to="/register" className="navbar-brand" >Регистрация</Link>
        </li>
      

      
      </ul>
    )
};

export default Navbar;