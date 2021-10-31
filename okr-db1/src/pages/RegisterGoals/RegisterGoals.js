import React from "react";
import './RegisterGoals.js';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
export default function RegisterGoals(){
    return (
        <Form>
            <Title classname="title">Register New Objective</Title>
            <Input inputType="text" inputName="inputName" inputHolder="Objective Name" inputRequired={ true }></Input>
            <Input inputType="text" inputName="inputDescription" inputHolder="Objective Description" inputRequired={ true }></Input>
            <Title classname="sub-title">Objective Start Date</Title>
            <Input inputType="date" inputName="inputStartDate" inputHolder="" inputRequired={ true }></Input>
            <Title classname="sub-title">Objective End Date</Title>
            <Input inputType="date" inputName="inputFinalDate" inputHolder="" inputRequired={ true }></Input>
            <Button>Register</Button>
        </Form>
    );
}