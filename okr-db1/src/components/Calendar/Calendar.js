import React from "react";
import './Calendar.css';
export default function Calendar(props){
   
    return (
        <div className="calendar" style={props.styleCalendar}>
            <label className="calendar-avaliations" >Check Points</label>
            <ul className="calendar-list">
                <li className="check">01</li>
                <li className="check">02</li>
                <li className="check">03</li>
                <li className="check">04</li>
                <li className="check">05</li>
                <li className="check">06</li>
            </ul>
        </div>
    );
}