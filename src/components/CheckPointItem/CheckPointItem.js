import React, {useState} from 'react';
import Input from '../Input/Input';
import './CheckPointItem.css';

export default function CheckPointItem(props){
    const colorCheck = (event)=>{
        const defaultElement = event.target.parentElement;
       if(event.target.id==="green"){
            defaultElement.style.border="1px solid black";
            defaultElement.children.checked = true;
            defaultElement.parentElement.children[2].style.border="none";
            defaultElement.parentElement.children[3].style.border="none";
       }else if(event.target.id === "yellow"){
            defaultElement.style.border="1px solid black";
            defaultElement.children.checked = true;
            defaultElement.parentElement.children[1].style.border="none";
            defaultElement.parentElement.children[3].style.border="none";
       }else{
            defaultElement.style.border="1px solid black";
            defaultElement.children.checked = true;
            defaultElement.parentElement.children[1].style.border="none";
            defaultElement.parentElement.children[2].style.border="none";
       }
    }
    return (
        <div className="item-check">
            <label>{props.keyResult.name}</label>
            <div id="color-group" className="color-group" key={props.id}>
                <Input classname="check-point" id={props.id}
                    inputType="number"
                    inputName="inputPoint"
                    inputHolder="Check Point Value"
                    inputRequired={true}
                ></Input>

                <label htmlFor="green" style={{backgroundColor:"#54C213"}} >
                    <input className="radio" id="green" type="radio" value="#54C213" name={"colorGroup"+props.id} onClick={colorCheck} />
                </label>
                <label htmlFor="yellow" style={{backgroundColor:"#C2B91B"}} >
                    <input className="radio" id="yellow" type="radio" value="#C2B91B" name={"colorGroup"+props.id} onClick={colorCheck} />
                </label>
                <label htmlFor="red" style={{backgroundColor:"#C23700"}} >
                    <input className="radio" id="red" type="radio" value="#C23700" name={"colorGroup"+props.id} onClick={colorCheck} />
                </label>
            </div>
        </div>
    );
}