import React from 'react';
import Menu from '../../components/Menu/Menu';
import "./Team.css";
export default function Team(){
    const optionsMenu = [
        {
            route:"/registergoals",
            routeText:"New Quarter"
        },
        {
            route:"/registerteampartner",
            routeText:"New Team Partner"
        }
    ];
    return (
        <div className="team">
            <Menu options={optionsMenu}  hasLogo={true}/>
        </div>
    );
}