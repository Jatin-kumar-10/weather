import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
      Developed by{" "}
        <a target="_blank" href="http://www.linkedin.com/in/jatin-kumar10">
          JATIN KUMAR
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
