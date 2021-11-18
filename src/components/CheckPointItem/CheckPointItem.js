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
            <fieldset id="color-group" className="color-group">
                <label htmlFor="green" style={{backgroundColor:"#54C213"}} >
                    <input id="green" type="radio" value="#54C213" name="colorGroup" />
                </label>
                <label htmlFor="yellow" style={{backgroundColor:"#C2B91B"}} >
                    <input id="yellow" type="radio" value="#C2B91B" name="colorGroup" />
                </label>
                <label htmlFor="red" style={{backgroundColor:"#C23700"}} >
                    <input id="red" type="radio" value="#C23700" name="colorGroup" />
                </label>
            </fieldset>
        </div>
    );
}