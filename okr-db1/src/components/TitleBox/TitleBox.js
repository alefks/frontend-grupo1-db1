import React from "react";
import Box from './../Box/Box';
export default function TitleBox(props){
    return (
        <Box classname={props.boxClassName}>
            <label className={props.titleClassName}>
                {props.titleText} 
            </label>
            <div className="task">
                {props.children}
            </div>
        </Box>
    );
    
}