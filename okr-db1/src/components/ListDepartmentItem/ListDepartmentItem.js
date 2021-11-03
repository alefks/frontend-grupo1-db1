import React from "react";
import './ListDepartmentItem.css';
export default function ListDepartmentItem(props){
    return (
        <article className="department">
                {props.department.departmentName}
            <div className="level">
                {props.department.totalValue} %
            </div>
        </article>
    );
}