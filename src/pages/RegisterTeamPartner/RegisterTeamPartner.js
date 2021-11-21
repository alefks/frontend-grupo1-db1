import React, { useState, useEffect } from "react";
import "./RegisterTeamPartner.css";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import { useParams } from "react-router-dom";
import Api from "../../api/api";
import { useHistory } from "react-router-dom";

export default function RegisterTeamPartner(props) {
    const [editable, setEditable] = useState(false);
    const { teamId, id } = useParams();
    const lang = props.lang.RegisterTeamPartner;
    const history = useHistory();
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
                    {editable ? lang.page.form.edit.option1 : lang.page.form.register.option1}
                    <CancelLabel />
                </Title>
                <Input
                    inputType="text"
                    inputName="inputTeamPartnerName"
                    inputHolder={lang.page.form.register.option2}
                    inputRequired={true}
                    inputDefaultValue={teamPartner.name}
                ></Input>
                {editable ? <Button>{lang.page.button.edit}</Button> : <Button>{lang.page.button.register}</Button>}
            </Form>
        </div>
    );
}
