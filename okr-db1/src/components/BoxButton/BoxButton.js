import React from "react";
import './BoxButton.css';
export default function BoxButton(props){
    return (
        <div className="box-button">
            {props.children}
        </div>
    );
}