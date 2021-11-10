import React from 'react';
import { useHistory } from "react-router-dom";
import './CancelLabel.css';
export default function CancelLabel(props){
    const history = useHistory();
    
    return (
        <label className="cancel" onClick={!props.closeButton?(history.goBack):(props.action)}>
            X
        </label>
    );
}