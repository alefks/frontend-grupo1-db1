import React from "react";
import './MenuOptions.css';
import { Link } from "react-router-dom";
export default function MenuOptions(props){
    return (
        <nav className="menu">
            <ul className="options">
                {props.options.map((option,index)=>(
                    <li key={index} className="option">
                        <Link to={option.route}>{option.routeText}</Link>
                    </li>
                ))}
                {!!props.show?<li className="option"/>:""}                
            </ul>
        </nav>
    );
}