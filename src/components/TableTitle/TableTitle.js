import React from "react";
import './TableTitle.css';
export default function TableTitle(props){
    return (
        <thead className="thead">
            <tr>
                {props.titles.map((title,index)=>(
                    <th key={index}>{title}</th>
                ))}
                <th></th>
            </tr>
        </thead>
    );
}