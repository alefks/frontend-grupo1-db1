import React, { useState, useEffect } from "react";
import "./RegisterKeyResult.css";
import Title from "./../../components/Title/Title";
import Form from "./../../components/Form/Form";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from "../../api/api";
import { useParams } from "react-router-dom";
import Select from "../../components/Select/Select";

export default function RegisterKeyResult({ history }) {
    const { objectiveId,id } = useParams();
    const [editable, setEditable] = useState(false);
    const [keyResult, setKeyResult] = useState({ 
        name: "",
        description: "",
        goal: "",
        responsible: "",
        objective: ""
    });
    const [teamPartners, setTeamPartners] = useState([])

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
        }
        fetchGetTeamPartners();
    }, []);

    const fetchGetTeamPartners = async () => {
        const response = await Api.getAll("team-partner");
        const result = await response.json();
        setTeamPartners(result);
    };

    const getInputValues = async (event) => {
        event.preventDefault();

        const payload = { ...keyResult };

        payload.name = event.target.inputName.value;
        payload.description = event.target.inputDescription.value;
        payload.goal = +event.target.inputGoal.value;
        payload.responsible = +event.target.inputResponsible.value;
        payload.objective = +objectiveId; 

        if (editable) {
            //await Api.patch("keyresult", id, payload);
            console.log('PATCH', payload)
        } else {
            //await Api.post("keyresult", payload);
            console.log('POST', payload)
        }

        //history.push("/team/" + id);
    };
    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable?
                        'Edit key Result' 
                    :
                        'New Key Result'
                    }
                    <CancelLabel/>
                </Title>
                <Input
                    inputType="text"
                    inputName="inputName"
                    inputHolder="Key Result Name"
                    inputRequired={true}
                ></Input>
                <Input
                    inputType="text"
                    inputName="inputDescription"
                    inputHolder="key Result Description"
                    inputRequired={true}
                ></Input>
                <Input
                    inputType="number"
                    inputName="inputGoal"
                    inputHolder="key Result Goal"
                    inputRequired={false}
                ></Input>
                <Title classname="sub-title" htmlfor="inputResponsible">key Result Responsible</Title>
                    <Select 
                        name="inputResponsible"
                        values={teamPartners} 
                        eventAction={false}
                    ></Select>
                <Button>{editable ? "Save" : "Register"}</Button>
            </Form>
        </div>
    );
}
