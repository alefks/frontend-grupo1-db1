import React from "react";
import './Input.css';
export default function Input(props){
    return (
        <input className="input" type={props.inputType} name={props.inputName} placeholder={props.inputHolder} required={props.inputRequired}/>
    );
}