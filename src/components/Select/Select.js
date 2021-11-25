import React from 'react';
import './Select.css';

export default function Select(props){
    return (
        <select name={props.name} className={props.classname?props.classname:"select-item"} onChange={props.eventAction?props.eventAction:undefined}>
            {props.values.map((value,index)=>(
                <option value={value.name?value.id:value} key={index} selected={props.select === value.id ? true : false}>{value.name?value.name:value}</option>
            ))}                 
        </select>
    );
}