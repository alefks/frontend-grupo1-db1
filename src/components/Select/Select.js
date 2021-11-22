import React from 'react';
import './Select.css';

export default function Select(props){
    return (
        <select name={props.name} className="select-item" onChange={props.eventAction?props.eventAction:undefined}>
            {props.values.map((value,index)=>(
                <option value={value.name?value.id:value} key={index} >{value.name?value.name:value}</option>
            ))}                 
        </select>
    );
}