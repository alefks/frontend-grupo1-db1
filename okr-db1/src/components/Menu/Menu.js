import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';
import Logo from './../../img/db1-logo.png';
export default function Menu(props){

    return (
        <div className="menu">
            <img className="logo" src={Logo}/>
            {props.options.map((option,index)=>(
                option.routeText!==''?
                    <MenuItem option={option} key={index} />
                :
                    <MenuItem returnPage={true} key={index} />
            ))}
        </div>
    );
}
