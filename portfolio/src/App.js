import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Card from "./components/card/card";
import java from "./assets/Javas.png"
import node from "./assets/Node.png"
import rea from "./assets/React.png"
import htm from "./assets/html.png"
import css from "./assets/css.png"

function App() {

  const links = [{title: "Wheater App", lin1:'#', lin2:'#'},{title: 'Tic Tac Toe', lin1:'#',lin2:'#'},{title: 'Tip Calculator', lin1:'#',lin2:'#'}]

  return (
    <div className="App">
        <div className="back">
          <span className="fil-fold">
            <div className="fold">
              <Header/>
              <div className="intro">
                <h1>
                  Hellow World  I'm 
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
          <h1 className="title">
            {'<About Me/>'}
          </h1>
        </div>
        <div className="Container">
          <h1 className="title right">
            {'<Projects/>'}
          </h1>
          <div className="center">
            {links.map(e => {
              return(<Card value={e.title} link1={e.lin1} link2={e.lin2}/>)
            })}
          </div>
        </div>
        <div className="Container">
          <h1 className="title">
            {'<Skills/>'}
          </h1>
          <div className="center">
            <img className="skill-logo" src={htm} alt='HTML'/>
            <img className="skill-logo" src={css} alt='CSS'/>
            <img className="skill-logo" src={java} alt='JavaScript'/>
            <img className="skill-logo" src={rea} alt='React'/>
          </div>
        </div>
        <div className="Container">
          <h1 className="title right">
            {'<Contact Me/>'}
          </h1>
          <div>
            <div>
              <span>
                <p></p>
              </span>
              <span>
                <p></p>
              </span>
              <span>
                <p></p>
              </span>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
