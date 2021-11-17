import React,{ useState } from 'react';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css';
import Logo from './../../img/db1-logo.png';
import MenuIcon from './../../img/icons/menu.png';
export default function Menu(props){
    const [showMenu,setShowMenu] = useState(true);

    const openClose = (event)=>{
        if(showMenu){
            event.target.parentElement.parentElement.style="width:50%";
            event.target.parentElement.parentElement.children[1].style="display:flex";
            setShowMenu(false);
        }else{
            event.target.parentElement.parentElement.style="width:0%";
            event.target.parentElement.parentElement.children[1].style="display:none";
            setShowMenu(true);
        }
    }
    return (
        <div className="menu">
            <div className="menu-button" onClick={openClose}>
                <img src={MenuIcon} alt="menu icon" />
            </div>
            <div className="menu-options">
                <img className="logo" src={Logo} alt="logo"/>
                {props.options.map((option,index)=>(
                    option.routeText!==''?
                        <MenuItem option={option} key={index} />
                    :
                        <MenuItem returnPage={true} key={index} />
                ))}
            </div>
        </div>
    );
}
