import React from 'react';
import './Select.css';

export default function Select(props){
    return (
        <select name={props.name} className="select-item" onChange={props.eventAction?props.eventAction:""}>
            {props.values.map((value,index)=>(
                <option value={value} key={index}>{value}</option>
            ))}                 
        </select>
    );
}