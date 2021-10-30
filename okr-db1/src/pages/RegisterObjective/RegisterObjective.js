import React from "react";
import './RegisterObjective.js';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
export default function RegisterObjective(){
    return (
        <Form>
            <Title classname="title">Register New Objective</Title>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Title classname="sub-title">Objective Start Date</Title>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Title classname="sub-title">Objective End Date</Title>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Button>Register</Button>
        </Form>
    );
}