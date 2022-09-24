import React from "react";
import {BsWindow, BsCodeSquare} from 'react-icons/bs'
import './cards.css'

const Card = ({value, link1, link2}) => {

    return(
        <div className="card_cont">
            <h2>
                {value}
            </h2>
            <div>
                <BsWindow  size={60}/>
                <a href={link1}>Go to Page</a>
            </div>
            <div>
                <BsCodeSquare size={60}/>
                <a href={link2}>View Code</a>
            </div>
        </div>
    )

}

export default Card