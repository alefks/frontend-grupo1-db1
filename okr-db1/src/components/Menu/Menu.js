import React from "react";
import LogoSquad from './../LogoSquad/LogoSquad';
import MenuOptions from './../MenuOptions/MenuOptions';
import './Menu.css';
export default function Menu(props){
    return (
        <div className="bar">
            <LogoSquad logoText={props.logoText}/>
            <MenuOptions route={props.route} textRoute={props.routeText} />
        </div>
    );
}