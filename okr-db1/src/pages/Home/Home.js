import React from "react";
import ListDepartments from "../../components/ListDepartments/ListDepartments";
import Menu from "./../../components/Menu/Menu";
import './Home.css';

export default function Home(){
    const menuOptions = [{
        route:"/registerdepartment",
        routeText:"New Department"
    },
    ];
    const testListDepartments=[
        {
            id: 1,
            departmentName: "financial",
            totalValue: 30
        },
        {
            id: 2,
            departmentName: "comercial",
            totalValue: 60
        },
        {
            id: 3,
            departmentName: "developer",
            totalValue: 100
        },{
            id: 4,
            departmentName: "financial",
            totalValue: 30
        },
        {
            id: 5,
            departmentName: "comercial",
            totalValue: 60
        },
        {
            id: 6,
            departmentName: "developer",
            totalValue: 100
        },
    ]
    return (
        <div className="homeBody">
            <Menu options={menuOptions} hasLogo={false} />            
            <ListDepartments departments={testListDepartments}/>
        </div>
    )  ; 
}