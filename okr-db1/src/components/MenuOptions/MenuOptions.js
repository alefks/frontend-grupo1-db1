import React from "react";
import './MenuOptions.css';
import { Link } from "react-router-dom";
export default function MenuOptions(props){
    return (
        <nav class="menu">
            <ul class="options">
                <li class="option">
                    <Link to={props.route}>{props.textRoute}</Link>
                </li>
            </ul>
        </nav>
    );
}