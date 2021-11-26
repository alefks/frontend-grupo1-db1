import React from 'react';
import { useHistory } from 'react-router-dom';
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import Select from '../../components/Select/Select';
import Form from '../../components/Form/Form';
import './SelectLanguage.css';
export default function SelectLanguage(props){
    const history = useHistory();
    const values=[
        {
            id:0,
            name:"Português",
        },
        {
            id:1,
            name:"English"
        }
    ]
    const setLanguage = (event)=>{
        event.preventDefault();
        if(event.target.inputLanguage.value==="0"){
            document.cookie = "Language=pt-BR";
        }else{
            document.cookie = "Language=english-US";
        }
        window.location.href = "/";
    }
    return (
        <div className='body'>
            <Form classname="form select-language" submitAction={setLanguage} >
                <Title classname="title select-title">
                    Select other language
                    <CancelLabel/>
                </Title>
                <Select name={"inputLanguage"} values={values} ></Select>
                <Button>Save</Button>
            </Form>
        </div>
    );
}