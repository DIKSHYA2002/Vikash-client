import React from "react";
import './landing-page.css';
import { Navbar } from "./Navbar";
// import logo from '../images/logo.png'
// import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import NavBar from "./Navbar";

export function Homepage() {
    const { loginWithRedirect} = useAuth0();
    // const { logout } = useAuth0();
    return (
        <>
          {/* <Navbar /> */}
            <div className="home" >
                {/* <div className="nav">
                <div className="links">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        {isAuthenticated ? (<ul>
                            <li><Link to="/create">CREATE</Link></li>
                            <li><Link to="/Blogs">BLOGS</Link></li>
                            <li><Link to="/products">PRODUCTS</Link></li>
                            <li><Link to="/services">SERVICES</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li>
                                <button className="btn" onClick={() => logout({ returnTo: window.location.origin })}>
                                    Log Out
                                </button>
                            </li></ul>) : (<li><button className="btn" onClick={() => loginWithRedirect()}>Log In</button></li>)}
                            <li>{isAuthenticated && <p>{user.email}</p>}</li>
                    </ul>
                    <div className="logo">
                        <img src={logo} ></img>
                    </div>
                </div>

            </div> */}
                <Navbar />
                <div className="head-1">
                    <div className="text--1">
                        <a>
                            THE FUTURE OF<br></br>
                            ODISHA LIES <br></br>
                            IN ITS <span className="village">VILLAGES</span><br></br>
                            <hr></hr>
                        </a>

                    </div>
                    <div className="text--2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo <br></br>impedit quisquamnumquam earum minus quibusdam laudantium dolorem  <br></br>laboriosam quas ut? Quis adipisci necessitatibus quisquam ipsa.
                    </div>
                    <div className="btn-getStarted">
                        <h1><button onClick={() => loginWithRedirect()}>Get Started</button></h1>

                    </div>
                </div>
            </div>
        </>

    );

}