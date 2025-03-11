import React from 'react';
import './NavBar.css';
import logo from "./images/logo.png";
import icon1 from './images/icon1';

const NavBar = () => {
    return(
<nav>
    <div className='navContext'>
        <div className="logo">
        <img src={logo} />
        </div>

        <div className="links">
        
            <li><a id='activeLink' href="#">Analyze</a></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Track</a></li>
        </div>  
        
        <div className="iconGroup">
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
        </div>
      </div>
   
   
</nav>
    );
};

export default NavBar;