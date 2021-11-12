import React from "react";
import Form from './../Form/Form';
import Button from './../Button/Button';
import CancelLabel from "../CancelLabel/CancelLabel";
import './AddPartner.css';

export default function AddPartner(props){
    const partners = [
        {
            id: 1,
            name: "andreia",
        },
        {
            id: 2,
            name: "joao",
        },
    ]
    return (
        <Form classname={"form add"}>
            <CancelLabel action={props.closeButton} closeButton={true}>

            </CancelLabel>
            <select name="partner" id="cars" className="input">
                {partners.map((value)=>(
                    <option className="select-item" value={value.id} key={value.id}>{value.name}</option>
                ))}
            </select>
            <Button>
                Add
            </Button>
        </Form>
    )
}