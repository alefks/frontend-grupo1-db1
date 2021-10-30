import React from "react";
import './RegisterKeyResult.css';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
export default function RegisterKeyResult(){
    return (
        <Form>
            <Title classname="title">Register New Key Result</Title>
            <Input inputType="text" inputName="inputName" inputHolder="Key Result Name" inputRequired="true"></Input>
            <Input inputType="text" inputName="inputDescription" inputHolder="key Result Description" inputRequired="true"></Input>
            <Input inputType="number" inputName="inputGoal" inputHolder="key Result Goal" inputRequired="false"></Input>
            <Input inputType="text" inputName="inputArchieved" inputHolder="key Result Archieved" inputRequired="false"></Input>
            <Input inputType="text" inputName="inputFrequency" inputHolder="key Result Frequency" inputRequired="true"></Input>
            <Button>Register</Button>
        </Form>
    );
}