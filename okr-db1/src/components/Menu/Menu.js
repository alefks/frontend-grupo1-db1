import React from "react";
import LogoSquad from './../LogoSquad/LogoSquad';
import MenuOptions from './../MenuOptions/MenuOptions';
import './Menu.css';
export default function Menu(props){
    return (
        <div className="bar">
            {!!props.hasLogo?
                <LogoSquad logoText={props.logoText}/>
                :""}
            {!!props.hasLogo?
                <MenuOptions options={props.options} show={true}/>:
                <MenuOptions options={props.options} />
            }
        </div>
    );
}