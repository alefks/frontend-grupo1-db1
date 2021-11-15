import React, { useState } from "react";
import Box from "../../components/Box/Box";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import './CheckPoints.css';
import CheckPointItem from "../../components/CheckPointItem/CheckPointItem";
import { useParams } from "react-router-dom";

export default function CheckPoints(){
    const { objectiveId ,date } = useParams();
    const [keyResults, setKeyResults] = useState([
        {
            id:1,
            name:'item1 - teste',
            result:0,
        },
    ]);
    const getFormValues = (event)=>{
        event.preventDefault();
        const keyResultsCheckPoint = [
        ]
        let note = event.target.note.value;
        if(event.target.inputPoint.length===undefined){
            keyResultsCheckPoint.push(
                {
                    keyResultId:event.target.inputPoint.id,
                    keyResultValue:event.target.inputPoint.value
                },
            );
        }else{
            for(var count=0; event.target.inputPoint.length > count; count++){
                keyResultsCheckPoint.push(
                    {
                        keyResultId:event.target.inputPoint[count].id,
                        keyResultValue:event.target.inputPoint[count].value
                    },
                );
            }
        }
        console.log(keyResultsCheckPoint);
        console.log(note);
    }
    return (
       <div className="body check-points">
           <Form submitAction={getFormValues}>
                <Box classname="check-point-box">
                    {keyResults.map((keyResult,index)=>(
                        <CheckPointItem id={keyResult.id} keyResult={keyResult} key={index}/>
                    ))}
                </Box>
                <Box classname="column">
                    <Box classname="note-block">
                        <textarea className="note" name="note"></textarea>
                    </Box>    
                    <Button>
                        Save    
                    </Button>        
                </Box>
            </Form>
       </div>
    );
}