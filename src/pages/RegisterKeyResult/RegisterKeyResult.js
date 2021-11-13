import React, { useState, useEffect } from "react";
import "./RegisterKeyResult.css";
import Title from "./../../components/Title/Title";
import Form from "./../../components/Form/Form";
import Input from "./../../components/Input/Input";
import Button from "./../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from "../../api/api";
import { useParams } from "react-router-dom";

export default function RegisterKeyResult({ history }) {
    const { id } = useParams();
    const [editable, setEditable] = useState(false);
    const [keyResult, setKeyResult] = useState({ 
        name: "",
        description: "",
        goal: "",
        achieved: "",
        frequency: "",
        chekinDates: "",
        responsible: "",
        objective: ""
    });

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchTeamById();
        }
    }, []);

    const fetchTeamById = async () => {
        const response = await Api.getById("team", id);
        const result = await response.json();
        setKeyResult(result);
    };

    const getInputValues = async (event) => {
        event.preventDefault();

        const payload = { ...keyResult };

        payload.name = event.target.inputName.value;
        payload.description = event.target.inputDescription.value;
        payload.goal = event.target.inputGoal.value;
        payload.achieved = event.target.inputAchieved.value;
        payload.frequency = event.target.inputFrequency.value;
        payload.responsible = ''; // FALTA INPUT
        payload.objective = ''; // FALTA INPUT
        payload.chekinDates = ''; // FALTA VERIFICAR COMO SERÁ FEITO

        if (editable) {
            await Api.patch("keyresult", id, payload);
        } else {
            await Api.post("keyresult", payload);
        }

        history.push("/team/" + id);
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
                <Input
                    inputType="text"
                    inputName="inputAchieved"
                    inputHolder="key Result Achieved"
                    inputRequired={false}
                ></Input>
                <Input
                    inputType="text"
                    inputName="inputFrequency"
                    inputHolder="key Result Frequency"
                    inputRequired={true}
                ></Input>
                <Button>{editable ? "Save" : "Register"}</Button>
            </Form>
        </div>
    );
}
