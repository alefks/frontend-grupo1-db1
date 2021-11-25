import React, { useState,useEffect } from "react";
import Box from "../../components/Box/Box";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Input from "../../components/Input/Input";
import './CheckPoints.css';
import CheckPointItem from "../../components/CheckPointItem/CheckPointItem";
import { useParams } from "react-router-dom";
import Select from "../../components/Select/Select";

export default function CheckPoints(props){
    const { objectiveId ,date } = useParams();
    const selectDates = ["3-11-2021","4-11-2021"];
    const lang = props.lang.CheckPoints.page;
    const testKeyResults = [
        {
            id:1,
            name:'item1 - teste',
            result:0,
        },
        {
            id:2,
            name:'item2 - teste',
            result:0,
        },
        {
            id:3,
            name:'item3 - teste',
            result:0,
        },
        {
            id:4,
            name:'item4 - teste',
            result:0,
        },
        {
            id:5,
            name:'item5 - teste',
            result:0,
        },
        {
            id:6,
            name:'item6 - teste',
            result:0,
        },
        {
            id:7,
            name:'item7 - teste',
            result:0,
        },
        {
            id:8,
            name:'item8 - teste',
            result:0,
        },
    ];
    const [keyResults, setKeyResults] = useState([]);
    const [dateDefault,setDateDefault] = useState("");
    useEffect(()=>{
        if(date!=="edit"){
            setDateDefault(date.split('-')[2]+"-"+date.split('-')[1]+"-"+(parseInt(date.split('-')[0])<=9?"0"+date.split('-')[0]:date.split('-')[0]));
        }
        setKeyResults(testKeyResults);
    },[]);
    const getFormValues = (event)=>{
        event.preventDefault();
        const keyResultsCheckPoint = [
        ]
        let note = event.target.note.value;
        if(event.target.inputPoint.length===undefined){
            keyResultsCheckPoint.push(
                {
                    keyResultId:event.target.inputPoint.id,
                    keyResultValue:event.target.inputPoint.value,
                    keyResultFeeling:document.querySelector('input[name="colorGroup'+event.target.inputPoint.id+'"]:checked').value
                },
            );
        }else{
            for(var count=0; event.target.inputPoint.length > count; count++){
                keyResultsCheckPoint.push(
                    {
                        keyResultId:event.target.inputPoint[count].id,
                        keyResultValue:event.target.inputPoint[count].value,
                        keyResultFeeling:document.querySelector('input[name="colorGroup'+event.target.inputPoint[count].id+'"]:checked').value
                    },
                );
            }
        }
        console.log(keyResultsCheckPoint);
        
        console.log(note);
    }
    const getDateToSet=(event)=>{
        const newDate = event.target.value;
        setDateDefault(
            newDate.split('-')[2]+"-"+
            newDate.split('-')[1]+"-"+
            (parseInt(newDate.split('-')[0])<=9?
                "0"+newDate.split('-')[0]
            :
                newDate.split('-')[0]
            )
        );
    }
    return (
       <div className="body check-points">
           <Form submitAction={getFormValues}>
                <div className="check-point-column">
                    <Box classname="boxtitle boxtitle2">
                        {date==="edit"?
                            <Select name="date" eventAction={getDateToSet} classname="select-date" values={selectDates}></Select>
                        :
                            <div className="space"></div>
                        }
                        <label>{lang.titleCheck}</label>
                        
                        <Input inputType={"date"} id={"date"} inputDefaultValue={dateDefault!==""?dateDefault:undefined}></Input>
                    </Box>
                    <Box classname="check-point-box">
                        {keyResults.map((keyResult,index)=>(
                            <CheckPointItem id={keyResult.id} keyResult={keyResult} key={index}/>
                        ))}
                    </Box>
                </div>
                <div className="check-point-column-note">
                    <Box classname="boxtitle boxtitle2">{lang.titleNote}</Box>
                    <Box classname="column">
                        <Box classname="note-block">
                            <textarea className="note" name="note"></textarea>
                        </Box>    
                        <Button>
                            {lang.button}   
                        </Button>        
                    </Box>
                </div>
            </Form>
       </div>
    );
}