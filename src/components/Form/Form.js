import React from "react";
import './Form.css';
export default function Form(props){
    return (
        <form className={!props.classname?"form":props.classname} onSubmit={props.submitAction}>
            {props.children}
        </form>
    );
}