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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo{" "}
            <br></br>impedit quisquamnumquam earum minus quibusdam laudantium
            dolorem <br></br>laboriosam quas ut? Quis adipisci necessitatibus
            quisquam ipsa.
          </div>
          <div className="btn-getStarted">
            <h1>
              <button onClick={() => loginWithRedirect()}>Get Started</button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
