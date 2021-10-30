import React from "react";
import './LogoSquad.css';
export default function LogoSquad(props){
    return (
        <div className="logo-squad">
            <label className="division">{props.logoText}</label>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
    );
}