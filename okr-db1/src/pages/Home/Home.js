import React from "react";
import './Home.css';
import ListDepartments from "../../components/ListDepartments/ListDepartments";
import MenuOptions from "./../../components/MenuOptions/MenuOptions";

export default function Home(){
    return (
        <div className="body">
            <MenuOptions route="/registerdepartment" textRoute="New Department" />            
            <ListDepartments/>
        </div>
    )  ; 
}