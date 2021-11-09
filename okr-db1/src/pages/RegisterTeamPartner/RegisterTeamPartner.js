import React from "react";
import './RegisterTeamPartner.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BoxButton from "../../components/BoxButton/BoxButton";

export default function RegisterTeamPartner(){
    return (
        <Form>
            <Title classname="title">New Team Partner</Title>
            <Input inputType="text" inputName="inputEmployeeName" inputHolder="Employee Name" inputRequired={ true }></Input>
            <BoxButton>
                <Button classname="button cancel">Cancel</Button>
                <Button>Register</Button>
            </BoxButton>
        </Form>
    );
}