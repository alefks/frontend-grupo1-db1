import React,{useState,useEffect} from "react";
import './RegisterQuarter.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import BoxButton from "../../components/BoxButton/BoxButton";
import {useParams} from "react-router-dom";
export default function RegisterQuarter(){
    const [editable,setEditable] = useState(false);
    const { id } = useParams();
    const quarter ={
        name:""
    };
    useEffect(() => {
        if(id !== "new"){
            setEditable(true);
        }
    }, [editable]);
    console.log("recarregou");
    const getInputValues = (event) =>{
        event.preventDefault();
        quarter.name = event.target.inputQuarterName.value;
        console.log(quarter);
    };
    return (
        <Form submitAction={getInputValues}>
            <Title classname="title">New Quarter</Title>
            <Input inputType="text" inputName="inputQuarterName" inputHolder="Quarter Name" inputRequired={ true }></Input>
            <BoxButton>
                <Button classname="button cancel">Cancel</Button>
                {editable?
                    <Button>Save</Button>
                :
                    <Button>Register</Button>
                }
            </BoxButton>
        </Form>
    );
}