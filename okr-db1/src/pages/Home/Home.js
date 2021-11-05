import React from "react";
import ListDepartments from "../../components/ListDepartments/ListDepartments";
import Menu from "./../../components/Menu/Menu";
import OptionsList from "../../components/OptionsList/OptionsList";
import './Home.css';

export default function Home(){
    const menuOptions = [{
        route:"/registerteam",
        routeText:"New Team"
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
    ];
    const options = [
        {
            name:"2020",
            value:2020
        },{
            name:"2021",
            value:2021
        },
    ]
    return (
        <div className="homeBody">
            <Menu options={menuOptions} hasLogo={false} />            
            <ListDepartments departments={testListDepartments} year="2021">
                <OptionsList options={options}>

                </OptionsList>
            </ListDepartments>
        </div>
    )  ; 
}