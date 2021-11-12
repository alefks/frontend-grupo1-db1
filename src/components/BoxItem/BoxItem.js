import React from 'react';
import './BoxItem.css';

export default function BoxItem(props){
    return (
        <div className="box-item">
            {props.children}
        </div>
    );
}