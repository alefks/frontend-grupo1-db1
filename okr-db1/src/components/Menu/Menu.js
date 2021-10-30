import React from "react";
import LogoSquad from './../LogoSquad/LogoSquad';
import './Menu.css';
export default function Menu(){
    return (
        <div class="bar">
        <LogoSquad>

        </LogoSquad>
        <nav class="menu">
            <ul class="options">
                <li class="option">
                    <a>Register new Objective</a>
                </li>
            </ul>
        </nav>
    </div>
    );
}