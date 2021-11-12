import React,{useState,useEffect} from "react";
import {useParams} from "react-router-dom";
import './RegisterKeyResult.css';
import Title from './../../components/Title/Title';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
import CancelLabel from "../../components/CancelLabel/CancelLabel";

export default function RegisterKeyResult(){
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
                        'Edit key Result' 
                    :
                        'New Key Result'
                    }
                    <CancelLabel/>
                </Title>
                <Input inputType="text" inputName="inputName" inputHolder="Key Result Name" inputRequired={ true }></Input>
                <Input inputType="text" inputName="inputDescription" inputHolder="key Result Description" inputRequired={ true }></Input>
                <Input inputType="number" inputName="inputGoal" inputHolder="key Result Goal" inputRequired={ false }></Input>
                <Input inputType="text" inputName="inputArchieved" inputHolder="key Result Archieved" inputRequired={ false }></Input>
                <Input inputType="text" inputName="inputFrequency" inputHolder="key Result Frequency" inputRequired={ true }></Input>
                <Button>Register</Button>
            </Form>
        </div>
    );
}