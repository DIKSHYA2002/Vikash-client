
import logo from '../images/logo.png'
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export function Navbar(){
    return (
         <div className="nav2">
   <div className="links">
    <ul>
       <li><Link to = "/">HOME</Link></li>
        <li><Link to = "/create">CREATE</Link></li>
        <li><Link to = "/Blogs">BLOGS</Link></li>
        <li><Link to = "/products">PRODUCTS</Link></li>
        <li><Link to = "/services">SERVICES</Link></li>
        <li><Link to = "/about">ABOUT</Link></li>
    </ul>
    <div className="logo">
       <img src={logo} ></img>
    </div>
</div>

</div> 
    )

}