import React from "react";
import './NotFound.css';
import notFoundImage from "../../img/pageerror.png";
export default function NotFound(){
    return (
        <div className="body">
            <img src={notFoundImage} className="notFoundImage" alt="not found" />
        </div>
    );
}