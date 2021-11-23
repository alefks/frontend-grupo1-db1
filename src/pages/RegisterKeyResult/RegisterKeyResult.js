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
import SelectLanguage from "../SelectLanguage/SelectLanguage";

export default function RegisterKeyResult(props,{ history }) {
    const { objectiveId, id } = useParams();
    const lang = props.lang.RegisterKeyResult;
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
            fetchGetKeyResult();
        }
        fetchGetTeamPartners();
    }, []);

    const fetchGetTeamPartners = async () => {
        const response = await Api.getAll("team-partner");
        const result = await response.json();
        setTeamPartners(result);
    };

    const fetchGetKeyResult = async () => {
        const response = await Api.getById('keyresult', id);
        const result = await response.json();
        setKeyResult(result);
    }

    const getInputValues = async (event) => {
        event.preventDefault();

        const payload = { 
            name: event.target.inputName.value,
            description: event.target.inputDescription.value,
            goal: +event.target.inputGoal.value,
            responsible: +event.target.inputResponsible.value,
            objective: +objectiveId, 
         };

        if (editable) {
            await Api.patch("keyresult", id, payload);
        } else {
            await Api.post("keyresult", payload);
        }

        //history.goBack();
    };
    return (
        <div className="body">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable?
                        lang.page.form.edit.option1
                    :
                        lang.page.form.register.option1
                    }
                    <CancelLabel/>
                </Title>
                <Input
                    inputType="text"
                    inputName="inputName"
                    inputHolder={lang.page.form.register.option2}
                    inputRequired={true}
                    inputDefaultValue={keyResult.name}
                ></Input>
                <Input
                    inputType="text"
                    inputName="inputDescription"
                    inputHolder={lang.page.form.register.option3}
                    inputRequired={true}
                    inputDefaultValue={keyResult.description}
                ></Input>
                <Input
                    inputType="number"
                    inputName="inputGoal"
                    inputHolder={lang.page.form.register.option4}
                    inputRequired={false}
                    inputDefaultValue={keyResult.goal}
                ></Input>
                <Title classname="sub-title" htmlfor="inputResponsible">{lang.page.form.register.option5}</Title>
                    <Select 
                        name="inputResponsible"
                        values={teamPartners} 
                        eventAction={false}
                        select={keyResult.responsibleId}
                    ></Select>
                <Button>{editable ? "Save" : "Register"}</Button>
            </Form>
        </div>
    );
}
