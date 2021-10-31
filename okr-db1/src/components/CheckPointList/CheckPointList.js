import React from "react";
import './CheckPointList.css';
export default function CheckPointList(){
    return (
        <div class="calendar">
            <label class="calendar-avaliations">Check Points</label>
            <ul class="calendar-list">
                <li class="check">01</li>
                <li class="check">02</li>
                <li class="check">03</li>
                <li class="check">04</li>
                <li class="check">05</li>
                <li class="check">06</li>
            </ul>
        </div>
    );
}