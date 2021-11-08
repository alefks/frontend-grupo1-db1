import React from 'react';
import "./TeamItem.css";
export default function TeamItem(props){
    return (
        <div className="team-item">
            {props.children}
        </div>
    );
}