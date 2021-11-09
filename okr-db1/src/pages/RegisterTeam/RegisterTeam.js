import React from "react";
import './RegisterTeam.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BoxButton from "../../components/BoxButton/BoxButton";
export default function RegisterTeam(){
    return (
        <Form>
            <Title classname="title">New Team</Title>
            <Input inputType="text" inputName="inputTeamName" inputHolder="Team Name" inputRequired={ true }></Input>
            <Input inputType="text" inputName="inputYear" inputHolder="Year" inputRequired={ true }></Input>
            <BoxButton>
                <Button classname="button cancel">Cancel</Button>
                <Button>Register</Button>
            </BoxButton>
        </Form>
    );
}