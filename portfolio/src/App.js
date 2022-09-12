import React from "react";
import "./App.css";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
        <div className="back">
          <span className="fil-fold">
            <div className="fold">
              <Header/>
              <div className="intro">
                <h1>
                  Hellow World  I`m 
                </h1>
                <h1 className="name">
                  {'<h1> Jose Bastidas </h1>'}
                </h1>
                <h1>
                  Front End Developer
                </h1>
              </div>
            </div>
            <div className="logo"></div>
          </span>
          <button className="conta">Contact Me</button>
          <p className="whater">{'</>'}</p>
        </div>
        <div className="Container">
          <h1>
            {'<About Me/>'}
          </h1>
        </div>
    </div>
  );
}

export default App;
