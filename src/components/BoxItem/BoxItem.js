import React from 'react';
import './BoxItem.css';

export default function BoxItem(props){
    return (
        <div className={props.classname?"box-item " + props.classname:"box-item"}>
            {props.children}
        </div>
    );
}