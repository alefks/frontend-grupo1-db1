import React from "react";
import './Form.css';
export default function Form(props){
    return (
        <form className={!props.classname?"form":props.classname}>
            {props.children}
        </form>
    );
}