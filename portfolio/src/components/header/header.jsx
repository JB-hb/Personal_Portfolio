import React, {useState} from "react";
import './header.css'

const Header = () =>{

    const [selected, setSelected] = useState(1)

    return(
        <nav className="navMenu">
            <ul>
                <li>
                    <a style={selected === 1 ? {color : '#00E5E5'} : {color : 'white'}} onClick={() => setSelected(1)}>Hello World</a>
                </li>
                <li>
                    <a style={selected === 2 ? {color : '#00E5E5'} : {color : 'white'}} onClick={() => setSelected(2)}>About Me</a>
                </li>
                <li>
                    <a style={selected === 3 ? {color : '#00E5E5'} : {color : 'white'}} onClick={() => setSelected(3)}>Projects</a>
                </li>
                <li>
                    <a style={selected === 4 ? {color : '#00E5E5'} : {color : 'white'}} onClick={() => setSelected(4)}>Contact Me</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header