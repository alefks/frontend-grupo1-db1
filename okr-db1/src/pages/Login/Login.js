import React from "react";
import Button from './../../components/Button/Button';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
export default function Login(){
    return (
        <Form>
            <Input inputType="text" inputName="inputUserName" inputHolder="User Name"></Input>
            <Input inputType="password" inputName="inputUserPass" inputHolder="User Password"></Input>
            <Button>Login</Button>
        </Form>
    );
}