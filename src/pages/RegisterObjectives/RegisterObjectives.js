import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import './RegisterObjectives.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CancelLabel from "../../components/CancelLabel/CancelLabel";

export default function RegisterObjectives(){
    const [editable,setEditable] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        if(id !== "new"){
            setEditable(true);
        }
    }, [editable]);
    return (
        <div className="body">
            <Form>
                <Title classname="title">
                    {editable?
                        'Edit Objective'
                    :
                        'New Objective'
                    }
                    <CancelLabel/>    
                </Title>
                <Input inputType="text" inputName="inputName" inputHolder="Objective Name" inputRequired={ true }></Input>
                <Input inputType="text" inputName="inputDescription" inputHolder="Objective Description" inputRequired={ true }></Input>
                <Title classname="sub-title">Objective Start Date</Title>
                <Input inputType="date" inputName="inputStartDate" inputHolder="" inputRequired={ true }></Input>
                <Title classname="sub-title">Objective End Date</Title>
                <Input inputType="date" inputName="inputFinalDate" inputHolder="" inputRequired={ true }></Input>
                {editable?
                    <Button>Save</Button>
                :
                    <Button>Register</Button>
                }
            </Form>
        </div>
    );
}