import React from "react";
import './RegisterPerspective.js';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
export default function RegisterPerspective(){
    return (
        <Form>
            <Title classname="title">Register New Perspective</Title>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Input inputType="" inputName="" inputHolder=""></Input>
            <Button>Register</Button>
        </Form>
    );
}