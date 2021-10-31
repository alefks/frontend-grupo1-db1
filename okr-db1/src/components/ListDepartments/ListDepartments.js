import React from "react";
import ListDepartmentItem from "../ListDepartmentItem/ListDepartmentItem";
import TitleBox from "./../TitleBox/TitleBox";
import './ListDepartments.css';

export default function ListDepartments(){
    return (
        <section className="list-departments">
            <TitleBox classname="task-title">
                Departments
            </TitleBox>
            <div className="list">
                <ListDepartmentItem />
                <ListDepartmentItem />
                <ListDepartmentItem />
                <ListDepartmentItem />
            </div>
        </section>
    );
}
