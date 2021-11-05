import React from "react";
import Input from "../Input/Input";
import "./CheckPointItem.css";
export default function CheckPointItem(props){
    return (
        <div className="checkPointItem">
            <label>{props.okr}</label>
            <label>{props.name}</label>
            <Input inputType="number" inputName="inputPoint" inputHolder="LV" inputRequired={true}></Input>
        </div>
    );
}