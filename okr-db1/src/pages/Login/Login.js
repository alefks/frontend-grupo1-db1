import React from "react";
import Button from './../../components/Button/Button';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Logo from './../../img/db1-logo.png';
import './Login.css';
export default function Login(){
    return (
        <div className="body">
            <Form>
                <img src={Logo} className="logo" alt="logo" />
                <Input inputType="text" inputName="inputUserName" inputHolder="User Name"></Input>
                <Input inputType="password" inputName="inputUserPass" inputHolder="User Password"></Input>
                <Button>Login</Button>
            </Form>
        </div>
    );
}