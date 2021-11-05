import React from "react";
import './ListDepartmentItem.css';
export default function ListDepartmentItem(props){
    const color ={
        backgroundColor:""
    }
    const colorDefine = (
        props.department.totalValue<=33?
            color.backgroundColor="red"
        :
        props.department.totalValue<=66 && props.department.totalValue>33?
            color.backgroundColor="#FFC300"
        :color.backgroundColor="green"
    );
    return (
        <article className="department" key={props.department.id} style={{backgroundColor:colorDefine}}>
                {props.department.departmentName}
            <div className="level">
                {props.department.totalValue} %
            </div>
        </article>
    );
}