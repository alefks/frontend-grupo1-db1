import React from "react";
import './CheckPointsList.css';
export default function CheckPointsList(props){
    return(
        <div className="task">
                {props.children}
        </div>
    );
}