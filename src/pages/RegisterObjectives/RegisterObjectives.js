import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RegisterObjectives.css";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from "../../api/api";
import Select from "../../components/Select/Select";

export default function RegisterObjectives(props, { history }) {
    const [editable, setEditable] = useState(false);
    const { teamId, id } = useParams();
    const lang = props.lang.RegisterObjective;
    const [objective, setObjective] = useState({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        team: "",
        relationalObjectives: "",
        manager: "",
        frequency: "",
    });
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchGetObjective(id);
        }
        fetchGetManagersList();
        fetchGetTeamsList();
    }, []);

    const getInputValues = async (event) => {
        event.preventDefault();
        const payload = { 
            name: event.target.inputName.value,
            description: event.target.inputDescription.value,
            startDate: new Date(event.target.inputStartDate.value),
            endDate: new Date(event.target.inputFinalDate.value),
            team: +teamId,
            manager: +event.target.inputManager.value,
            relationalObjectives: [+event.target.inputObjectives.value],
            frequency: +event.target.inputFrequency.value,
         };

        payload.relationalObjectives[0] === 0 && delete payload.relationalObjectives;

        if (editable) {
            await Api.patch("objective", id, payload);
            console.log('PATCH', payload)
        } else {
            console.log('POST',payload)
            await Api.post("objective", payload);
        }

        //history.goBack();
    };

    const fetchGetManagersList = async () => {
        const response = await Api.getAll("team-partner");
        const result = await response.json();
        setManagers(result);
    };

    const [selectedObjectives, setSelectedObjectives] = useState([]);
    const [showObjectives, setShowObjectives] = useState({ display: "none" });
    const teamObjectives = (event) => {
        const selectElement = event.target;
        if (
            selectElement.childNodes[selectElement.selectedIndex].value !== "0"
        ) {
            const teamId = selectElement.value;
            //fetchGetObjectives(teamId);
            setSelectedObjectives(["item1", "item2"]);
            setShowObjectives({ display: "flex" });
        } else {
            setSelectedObjectives([]);
            setShowObjectives({ display: "none" });
        }
    };

    const [teamList, setTeamList] = useState([
        {
            id: 0,
            name: " ",
        },
    ]);

    const fetchGetTeamsList = async () => {
        const response = await Api.getAll("team");
        const result = await response.json();
        result.unshift({
            id: 0,
            name: " ",
        });
        setTeamList(result);
    };

    const fetchGetObjective = async (id) => {
        const response = await Api.getById("objective", id);
        const result = await response.json();
        setObjective(result);
        console.log()
    };

    return (
        <div className="body register">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable
                        ? lang.page.form.register.option1
                        : lang.page.form.register.option1}
                    <CancelLabel />
                </Title>
                <fieldset>
                    <Input
                        inputType="text"
                        inputName="inputName"
                        inputHolder={lang.page.form.register.option2}
                        inputRequired={true}
                        inputDefaultValue={objective.name}
                    ></Input>
                    <Input
                        inputType="number"
                        inputName="inputFrequency"
                        inputHolder={lang.page.form.register.option3}
                        inputRequired={true}
                        inputDefaultValue={objective.frequency}
                    ></Input>
                    <Input
                        classname="objective-description"
                        inputType="text"
                        inputName="inputDescription"
                        inputHolder={lang.page.form.register.option4}
                        inputRequired={true}
                        inputDefaultValue={objective.description}
                    ></Input>
                    <Title classname="sub-title" htmlfor="inputManager">
                        {lang.page.form.register.option5}
                    </Title>
                    <Select
                        name="inputManager"
                        values={managers}
                        eventAction={false}
                    ></Select>
                    <Title classname="sub-title" htmlfor="inputTeam">
                        {lang.page.form.register.option6}
                    </Title>
                    <Select
                        name="inputTeam"
                        values={teamList}
                        eventAction={teamObjectives}
                    ></Select>
                    <Box classname="relations" style={showObjectives}>
                        <Title classname="sub-title" htmlfor="inputObjectives">
                            {lang.page.form.register.option7}
                        </Title>
                        <Select
                            style={showObjectives}
                            name="inputObjectives"
                            values={selectedObjectives}
                            eventAction={false}
                        ></Select>
                    </Box>
                    <Title classname="sub-title" htmlfor="inputStartDate">
                        {lang.page.form.register.option8}
                    </Title>
                    <Input
                        inputType="date"
                        inputName="inputStartDate"
                        inputHolder=""
                        inputRequired={true}
                        inputDefaultValue={objective.startDate.slice(0, 10)}
                    ></Input>
                    <Title classname="sub-title" htmlfor="inputFinalDate">
                        {lang.page.form.register.option9}
                    </Title>
                    <Input
                        inputType="date"
                        inputName="inputFinalDate"
                        inputHolder=""
                        inputRequired={true}
                        inputDefaultValue={objective.endDate.slice(0, 10)}
                    ></Input>
                </fieldset>
                {editable ? (
                    <Button>{lang.page.button.edit}</Button>
                ) : (
                    <Button>{lang.page.button.register}</Button>
                )}
            </Form>
        </div>
    );
}
