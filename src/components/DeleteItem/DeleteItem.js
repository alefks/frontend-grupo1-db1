import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Title from "../Title/Title";
import CancelLabel from "../CancelLabel/CancelLabel";
import './DeleteItem.css';

export default function DeleteItem(props){
    const deleteItem =(event)=>{
        event.preventDefault();
        if(props.table === "objective"){
            console.log("delted objective"+props.idItem);
        }else if(props.table === "keyresult"){
            console.log("delted keyresult "+props.idItem);
            
        }
    }
    return(
        <Form submitAction={deleteItem} classname="form delete" >
            <Title classname="title">
                Are you really sure
                <br/> 
                about deleting this?
                <CancelLabel closeButton={true} action={props.closeButton}/>
            </Title>
            <Button>
                Confirm
            </Button>
        </Form>
    );
}