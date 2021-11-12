import React from "react";
import './Title.css';
export default function Title(props){
    return (
        <p className={props.classname}>
            <label className="clean-space"></label>
            {props.children}
        </p>
    );
}