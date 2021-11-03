import React from "react";
import './Calendar.css';
export default function Calendar(props){
   
    return (
        <div className="calendar" style={props.styleCalendar}>
            <label className="calendar-avaliations" >Check Points</label>
            <ul className="calendar-list">
                {props.listOfDates.map((date,index)=>(
                    <li key={index} className="check">{date.date}</li>
                ))}
            </ul>
        </div>
    );
}