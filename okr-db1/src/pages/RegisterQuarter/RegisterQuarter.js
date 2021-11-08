import React from "react";
import './RegisterQuarter.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BoxButton from "../../components/BoxButton/BoxButton";

export default function RegisterQuarter(){
    return (
        <Form>
            <Title classname="title">Register New Quarter</Title>
            <Input inputType="text" inputName="inputQuarterName" inputHolder="Quarter Name" inputRequired={ true }></Input>
            <BoxButton>
                <Button classname="button cancel">Cancel</Button>
                <Button>Register</Button>
            </BoxButton>
        </Form>
    );
}