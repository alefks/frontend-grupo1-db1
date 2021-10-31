import React from "react";
import './ObjectiveBox.css';
export default function ObjectiveBox(props){
    return (
        <section className="goals-box">
            {props.children}
        </section>
    );
}