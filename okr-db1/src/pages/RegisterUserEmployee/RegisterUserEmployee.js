import React from "react";
import './RegisterUserEmployee.css';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
export default function RegisterUserEmployee(){
    return (
        <Form>
            <Title classname="title">Register New User Employee</Title>
            <Input inputType="text" inputName="inputEmployeeName" inputHolder="Employee Name" inputRequired="true"></Input>
            <Button>Register</Button>
        </Form>
    );
}