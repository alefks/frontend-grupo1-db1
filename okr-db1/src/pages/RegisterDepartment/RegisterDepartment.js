import React from "react";
import './RegisterDepartment.css';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
export default function RegisterDepartment(){
    return (
        <Form>
            <Title classname="title">Register New Department</Title>
            <Input inputType="text" inputName="inputDepartmentName" inputHolder="Department Name" inputRequired={ true }></Input>
            <Button>Register</Button>
        </Form>
    );
}