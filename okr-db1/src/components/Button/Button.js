import React from "react";
import './Button.css';
export default function Button(props){
       
    return (
        <button className={!!props.classname?props.classname:"button"}>
            {props.children}
        </button>
    );
}