import React from "react";
import Box from "../Box/Box";
import './CheckPointStatusItem.css';

export default function CheckPointStatusByItem(){
    return (
        <Box classname="point-item">
            <hr className="space"/>
            <label className="value">
                <p className="date">21/08/2021</p>
                <p className="value">25</p>
            </label>
            <hr className="space color-feeling"/>
        </Box>
    );
}