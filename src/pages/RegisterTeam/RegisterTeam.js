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
    console.log(editable)
    const fetchTeamById = async () => {
        const response = await Api.getById("team", id);
        const result = await response.json();
        setTeam(result);
    };

    const getInputValues = async (event) => {
        event.preventDefault();
        let complementUrl = "";
        const defaultYear = (new Date()).getFullYear();
        const payload = { ...team };

        payload.name = event.target.inputTeamName.value;

        if (editable) {
            await Api.patch("team", id, payload);
            complementUrl = id + "/" + defaultYear;
        } else {
            const response = await Api.post("team", payload);
            const result = await response.json();
            complementUrl = result.id + "/" + defaultYear;

        }

       history.push("/team/" + complementUrl);
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
