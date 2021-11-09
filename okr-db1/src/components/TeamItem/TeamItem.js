import React from 'react';
import { Link } from "react-router-dom";

import "./TeamItem.css";
export default function TeamItem(props){
    return (
        <div className="team-item">
            <Link to={"/"+props.locationpage+"/"+props.id}>
                {props.children}
            </Link>
        </div>
    );
}