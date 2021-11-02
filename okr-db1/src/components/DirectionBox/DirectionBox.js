import React from "react";
import './DirectionBox.css';
export default function DirectionBox(props){
    return (
        <div className="direction" style={props.style}>
            { ">" }
        </div>
    );
}