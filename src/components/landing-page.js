import React from "react";
import "./landing-page.css";
import { Navbar } from "./Navbar";
import { useAuth0 } from "@auth0/auth0-react";

export function Homepage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="head-1">
          <div className="text--1">
            <a>
              THE FUTURE OF<br></br>
              ODISHA LIES <br></br>
              IN ITS <span className="village">VILLAGES</span>
              <br></br>
              <hr></hr>
            </a>
          </div>
          <div className="text--2">
            An initiative to learn , explore and help the villages and <br></br>
            its people. The village with it's indigenous talents makes <br></br>
            it the major potential of economic growth and development.
          </div>
          <div className="button-getStarted">
            <h1>
              <button onClick={() => loginWithRedirect()}>Get Started</button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
