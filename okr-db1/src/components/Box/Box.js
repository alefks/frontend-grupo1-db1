import React from "react";
import './Box.css';
export default function Box(props){
    return(
        <article className={props.classname}>
            {props.children}
        </article>
    );
    
}