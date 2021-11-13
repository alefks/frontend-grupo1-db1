import React, { useState, useEffect } from "react";
import "./RegisterTeam.css";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import { useParams } from "react-router-dom";
import Api from "../../api/api";

export default function RegisterTeam({ history }) {
    const { id } = useParams();
    const [editable, setEditable] = useState(false);
    const [team, setTeam] = useState({ name: "" });

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchTeamById();
        }
    }, []);

    const fetchTeamById = async () => {
        const response = await Api.getById("team", id);
        const result = await response.json();
        setTeam(result);
    };

    const getInputValues = async (event) => {
        event.preventDefault();

        const payload = { ...team };

        payload.name = event.target.inputTeamName.value;

        if (editable) {
            await Api.patch("team", id, payload);
        } else {
            await Api.post("team", payload);
        }

        history.push("/team/" + id);
    };

    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable ? "Edit Team" : "New Team"}
                    <CancelLabel />
                </Title>
                <Input
                    inputType="text"
                    inputName="inputTeamName"
                    inputHolder="Team Name"
                    inputRequired={true}
                    inputDefaultValue={team.name}
                ></Input>
                <Button>{editable ? "Save" : "Register"}</Button>
            </Form>
        </div>
    );
}
