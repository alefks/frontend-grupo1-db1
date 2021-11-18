import React, { useState, useEffect } from "react";
import "./RegisterTeamPartner.css";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

export default function RegisterTeamPartner({ history }) {
    const [editable, setEditable] = useState(false);
    const { teamId, id } = useParams();
    const [teamPartner, setTeamPartner] = useState({
        name: "",
    });

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchTeamPartnerById();
        }
    }, []);

    const fetchTeamPartnerById = async () => {
        const response = await Api.getById("team-partner", id);
        const result = await response.json();
        setTeamPartner(result);
    };

    const getInputValues = async (event) => {
        const payload = { ...teamPartner };
        event.preventDefault();
        payload.name = event.target.inputTeamPartnerName.value;
        payload.team = [+teamId];

        if (editable) {
            delete payload.id;
            await Api.patch("team-partner", id, payload);
        } else {
            await Api.post("team-partner", payload);
        }

        history.goBack();
    };

    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable ? "Edit Team Partner" : "New Team Partner"}
                    <CancelLabel />
                </Title>
                <Input
                    inputType="text"
                    inputName="inputTeamPartnerName"
                    inputHolder="Team Partner Name"
                    inputRequired={true}
                    inputDefaultValue={teamPartner.name}
                ></Input>
                {editable ? <Button>Save</Button> : <Button>Register</Button>}
            </Form>
        </div>
    );
}
