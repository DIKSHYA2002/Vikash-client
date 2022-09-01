import React from "react";
import './landing-page.css';
import logo from '../images/logo.png'

export function Homepage() {
    return(
        <div className="home" >
            <div className="nav">
                <div className="links">
                    <ul>
                        <li><a href="">HOME</a></li>
                        <li><a href="">CREATE</a></li>
                        <li><a href="">BLOGS</a></li>
                        <li><a href="">PRODUCTS</a></li>
                        <li><a href="">SERVICES</a></li>
                        <li><a href="">ABOUT</a></li>
                    </ul>
                    <div className="logo">
                       <img src={logo} ></img>
                    </div>
                </div>
               
            </div>
            <div className="head-1">
                <div className="text--1">
                    <a>
                        THE FUTURE OF<br></br>
                        ODISHA LIES <br></br>
                        IN ITS <span className= "village">VILLAGES</span> <br></br>
                        <hr></hr>
                    </a>
                        
                </div>
                <div className="text--2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo <br></br>impedit quisquamnumquam earum minus quibusdam laudantium dolorem  <br></br>laboriosam quas ut? Quis adipisci necessitatibus quisquam ipsa.
                </div>
                <div className="btn-getStarted">
                    <h1>GET STARTED</h1>

                </div>
            </div>
    </div>

    );
    
}