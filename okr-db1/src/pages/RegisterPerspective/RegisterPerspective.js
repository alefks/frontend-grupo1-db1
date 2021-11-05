import React from "react";
import './RegisterPerspective.js';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
import BoxButton from "../../components/BoxButton/BoxButton";

export default function RegisterPerspective(){
    return (
        <Form>
            <Title classname="title">Register New Perspective</Title>
            <Input inputType="text" inputName="inputPerspectiveTitle" inputHolder="Perspective Title" inputRequired={ true }></Input>
            <Input inputType="number" inputName="inputPerspectiveValue" inputHolder="Perspective Percentage" inputRequired={ true }></Input>
            <BoxButton>
                <Button classname="button cancel">Cancel</Button>
                <Button>Register</Button>
            </BoxButton>
        </Form>
    );
}