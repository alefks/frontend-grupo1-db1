import React, {useState} from 'react';
import Input from '../Input/Input';
import './CheckPointItem.css';

export default function CheckPointItem(props){
    const [selectedColor, setSelectedColor] = useState({green:false,yellow:false,red:false});
    const colorCheck = (event)=>{
       if(event.target.id==="green"){
           setSelectedColor({green:true,yellow:false,red:false});
       }else if(event.target.id === "yellow"){
           setSelectedColor({green:false,yellow:true,red:false});
       }else{
           setSelectedColor({green:false,yellow:false,red:true});
       }
    }
    return (
        <div className="item-check">
            <label>{props.keyResult.name}</label>
            <fieldset id="color-group" className="color-group">
                <Input classname="check-point" id={props.id}
                    inputType="number"
                    inputName="inputPoint"
                    inputHolder="Check Point Value"
                    inputRequired={true}
                ></Input>

                <label htmlFor="green" style={selectedColor.green?{backgroundColor:"#54C213",border:"1px solid black"}:{backgroundColor:"#54C213"}} >
                    <input className="radio" id="green" type="radio" value="#54C213" name="colorGroup" onClick={colorCheck} />
                </label>
                <label htmlFor="yellow" style={selectedColor.yellow?{backgroundColor:"#C2B91B",border:"1px solid black"}:{backgroundColor:"#C2B91B"}} >
                    <input className="radio" id="yellow" type="radio" value="#C2B91B" name="colorGroup" onClick={colorCheck} />
                </label>
                <label htmlFor="red" style={selectedColor.red?{backgroundColor:"#C23700",border:"1px solid black"}:{backgroundColor:"#C23700"}} >
                    <input className="radio" id="red" type="radio" value="#C23700" name="colorGroup" onClick={colorCheck} />
                </label>
            </fieldset>
        </div>
    );
}