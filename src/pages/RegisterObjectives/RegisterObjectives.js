import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RegisterObjectives.css";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from '../../api/api'

export default function RegisterObjectives({ history }) {
    const [editable, setEditable] = useState(false);
    const { teamId, id } = useParams();
    const [objective, setObjective] = useState({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        team: '',
        relationalObjectives: '',
        manager: ''
    })

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
        }
    }, [editable]);

    const getInputValues = async (event) => {
        event.preventDefault();

        const payload = { ...objective };

        payload.name = event.target.inputTeamName.value;
        payload.description = event.target.inputDescription.value;
        payload.startDate = event.target.inputStartDate.value;
        payload.endDate = event.target.inputFinalDate.value;
        payload.team = teamId;
        payload.relationalObjectives = '' // FALTA INPUT DO FRONT
        payload.manager = '' // FALTA INPUT DO FRONT

        if (editable) {
            await Api.patch("objective", id, payload);
        } else {
            await Api.post("objective", payload);
        }

        history.push("/team/" + teamId);
    };
    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable ? "Edit Objective" : "New Objective"}
                    <CancelLabel />
                </Title>
                <Input
                    inputType="text"
                    inputName="inputName"
                    inputHolder="Objective Name"
                    inputRequired={true}
                ></Input>
                <Input
                    inputType="text"
                    inputName="inputDescription"
                    inputHolder="Objective Description"
                    inputRequired={true}
                ></Input>
                <Title classname="sub-title">Objective Start Date</Title>
                <Input
                    inputType="date"
                    inputName="inputStartDate"
                    inputHolder=""
                    inputRequired={true}
                ></Input>
                <Title classname="sub-title">Objective End Date</Title>
                <Input
                    inputType="date"
                    inputName="inputFinalDate"
                    inputHolder=""
                    inputRequired={true}
                ></Input>
                {editable ? <Button>Save</Button> : <Button>Register</Button>}
            </Form>
        </div>
    );
}
