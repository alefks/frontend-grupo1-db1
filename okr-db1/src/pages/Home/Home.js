import React from "react";
import ListDepartment from "../../components/ListDepartments/ListDepartments";
import MenuOptions from "./../../components/MenuOptions/MenuOptions";
import './Home.css';
export default function Home(){
    return (
        <div className="body">
            <MenuOptions route="/registerdepartment" textRoute="New Department" />            
            <ListDepartment/>
        </div>
    )  ; 
}