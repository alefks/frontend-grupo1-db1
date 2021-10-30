import React from "react";
import './ObjectiveBox.css';
export default function ObjectiveBox(props){
    return (
        <section class="goals-box">
            {props.children}
        </section>
    );
}