import React from "react";
import './MenuOptions.css';
import { Link } from "react-router-dom";
export default function MenuOptions(props){
    return (
        <nav className="menu">
            <ul className="options">
                <li className="option">
                    <Link to={props.route}>{props.textRoute}</Link>
                </li>
            </ul>
        </nav>
    );
}