import React from "react";
import Box from './../Box/Box';
export default function TitleBox(props){
    return (
            <label className={props.classname}>
                {props.titleText} 
            </label>
    );
    
}