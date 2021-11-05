import React from "react";
import "./OptionsList.css";

export default function OptionsList(props){
    return (
        <select name={props.name} className={"options"}>
            {props.options.map((option)=>(
                <option value={option.value}>{option.name}</option>
            ))}
        </select>
    );
}