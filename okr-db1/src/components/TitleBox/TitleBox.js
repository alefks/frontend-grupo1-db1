import React from "react";
import './TitleBox.css';
export default function TitleBox(props){
    return (
            <label className={props.classname}>
                {props.children} 
            </label>
    );
    
}