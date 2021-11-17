import React from "react";
import './Box.css';

export default function Box(props){
    return (
        <div className={"box "+props.classname} style={props.style?props.style:undefined}>
            {props.children}
        </div>
    )
}