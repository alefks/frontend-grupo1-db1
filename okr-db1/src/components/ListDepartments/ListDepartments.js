import React from "react";
import ListDepartmentItem from "../ListDepartmentItem/ListDepartmentItem";
import TitleBox from "./../TitleBox/TitleBox";
import './ListDepartments.css';

export default function ListDepartments(props){
    return (
        <section className="list-departments">
            <TitleBox classname="task-title">
                Departments
            </TitleBox>
            <div className="list">
                {props.departments.map((department,index)=>(
                    <ListDepartmentItem key={department.id} department={department}/>
                ))}
            </div>
        </section>
    );
}
