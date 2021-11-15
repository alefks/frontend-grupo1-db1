import React from "react";
import Form from './../Form/Form';
import Button from './../Button/Button';
import Select from './../Select/Select';
import CancelLabel from "../CancelLabel/CancelLabel";
import Title from '../Title/Title';
import './AddRelation.css';

export default function AddRelation(props){
    
    return (
        <Form classname={"form add"}>
            <Title classname="title">
                Add new Relation
                <CancelLabel action={props.closeButton} closeButton={true}/>
            </Title>
            <Select values={[]}></Select>
            <Button>
                Add
            </Button>
        </Form>
    )
}