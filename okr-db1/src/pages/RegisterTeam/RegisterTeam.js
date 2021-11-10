import React from "react";
import './RegisterTeam.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CancelLabel from "../../components/CancelLabel/CancelLabel";
export default function RegisterTeam(){
    return (
        <div className="body">
            <Form>
                <Title classname="title">
                    New Team
                    <CancelLabel/>       
                </Title>
                <Input inputType="text" inputName="inputTeamName" inputHolder="Team Name" inputRequired={ true }></Input>
                <Input inputType="text" inputName="inputYear" inputHolder="Year" inputRequired={ true }></Input>
                <Button>Register</Button>
            </Form>
        </div>
    );
}