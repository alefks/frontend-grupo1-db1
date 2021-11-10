import React,{useState,useEffect} from "react";
import './RegisterTeamPartner.css';
import Title from '../../components/Title/Title';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import {useParams} from "react-router-dom";
export default function RegisterTeamPartner(){
    const [editable,setEditable] = useState(false);
    const { teamId,id } = useParams();
    const teamPartner = {
        name:"",
        teamId:parseInt(teamId)
    };
    useEffect(() => {
        if(id !== "new"){
            setEditable(true);
        }
    }, [editable]);
    const getInputValues = (event) =>{
        event.preventDefault();
        teamPartner.name = event.target.inputTeamPartnerName.value;
        console.log(teamPartner);
    };
    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    New Team Partner
                    <CancelLabel/>   
                </Title>
                <Input inputType="text" inputName="inputTeamPartnerName" inputHolder="Team Partner Name" inputRequired={ true }></Input>
                {editable?
                    <Button>Save</Button>
                :
                    <Button>Register</Button>
                }
            </Form>
        </div>
    );
}