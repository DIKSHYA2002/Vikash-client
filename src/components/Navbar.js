import logo from "../images/logo.png";
// import './Navbar.css';

// export function Navbar(){
//     return (
//          <div className="nav2">
//    <div className="links">
//     <ul>
//        <li><Link to = "/">HOME</Link></li>
//         <li><Link to = "/create">CREATE</Link></li>
//         <li><Link to = "/Blogs">BLOGS</Link></li>
//         <li><Link to = "/products">PRODUCTS</Link></li>
//         <li><Link to = "/services">SERVICES</Link></li>
//         <li><Link to = "/about">ABOUT</Link></li>
//     </ul>
//     <div className="logo">
//        <img src={logo} ></img>
//     </div>
// </div>

// </div>
//     )

// }

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="Loading.." />
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            {isAuthenticated ? (
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/addblog"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Create
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/blog"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Blogs
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/products"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    exact
                    to="/services"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Services
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink
                    exact
                    to="/about"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    About
                  </NavLink>
                </li> */}
                <li>
                  <button
                    className="btn"
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            ) : (
              <li>
                <button className="btn" onClick={() => loginWithRedirect()}>
                  Log In
                </button>
              </li>
            )}
            <li className="nav-item">
              {isAuthenticated && <p className="user">{user.email}</p>}
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
};

// export default Navbar;
