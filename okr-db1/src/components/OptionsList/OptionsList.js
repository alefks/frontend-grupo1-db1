import React from "react";
import "./OptionsList.css";

export default function OptionsList(props){
    return (
        <select name={props.name} className={"options"}>
            {props.options.map((option,index)=>(
                <option value={option.value} key={index}>{option.name}</option>
            ))}
        </select>
    );
}