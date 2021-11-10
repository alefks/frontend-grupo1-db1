import React from 'react';
import './Modal.css';
export default function Modal(props){
    return (
        <div className="modal" style={props.style}>
            {props.children}
        </div>
    );
}