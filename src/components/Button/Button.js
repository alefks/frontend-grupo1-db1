import React from "react";
import { useHistory } from "react-router-dom";
import './Button.css';
export default function Button(props){
    const history = useHistory();
   
    return (
        <button className={ !!props.classname?props.classname:"button" } onClick={ !props.classname?props.onclick:history.goBack }>
            {props.children}
        </button>
    );
}