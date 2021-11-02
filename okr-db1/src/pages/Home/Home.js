import React from "react";
import './Home.css';
import ListDepartments from "../../components/ListDepartments/ListDepartments";
import Menu from "./../../components/Menu/Menu";

export default function Home(){
    const menuOptions = [{
        route:"/registerdepartment",
        routeText:"New Department"
    },
    ]
    return (
        <div className="body">
            <Menu options={menuOptions} hasLogo={false} />            
            <ListDepartments/>
        </div>
    )  ; 
}