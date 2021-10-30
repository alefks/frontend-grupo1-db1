import React from "react";
import ListDepartmentItem from "../ListDepartmentItem/ListDepartmentItem";
import './ListDepartments.css';
export default function ListDepartment(){
    return (
        <section className="list-departments">
                <label className="title">
                    Departments
                </label>
                <ListDepartmentItem />
                <ListDepartmentItem />
                <ListDepartmentItem />
                <ListDepartmentItem />
        </section>
    );
}
