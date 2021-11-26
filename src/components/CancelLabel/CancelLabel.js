import React from 'react';
import { useHistory } from "react-router-dom";
import './CancelLabel.css';
export default function CancelLabel(props){
    const history = useHistory();
    
    return (
        <label className={props.classname?props.classname:"cancel"} onClick={!props.closeButton?(history.goBack):(props.action)}>
            {props.children?props.children:"X"}
        </label>
    );
}