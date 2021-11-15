import React from 'react';
import Input from '../Input/Input';
import './CheckPointItem.css';

export default function CheckPointItem(props){
    return (
        <div className="item-check">
            <label>{props.keyResult.name}</label>
            <Input id={props.id}
             inputType="number"
             inputName="inputPoint"
             inputHolder="Check Point Value"
             inputRequired={true}
            ></Input>
        </div>
    );
}