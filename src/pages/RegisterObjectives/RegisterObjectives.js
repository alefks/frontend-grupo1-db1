import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./RegisterObjectives.css";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from '../../api/api'
import Select from "../../components/Select/Select";

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
    const [managers, setManagers] = useState([]);

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
        }
        fetchGetManagersList();
        fetchGetTeamsList()
    }, []);

    const getInputValues = (event) => {
        event.preventDefault();
        const payload = { ...objective };

        payload.name = event.target.inputName.value;
        payload.description = event.target.inputDescription.value;
        payload.startDate = event.target.inputStartDate.value;
        payload.endDate = event.target.inputFinalDate.value;
        payload.team = teamId;
        payload.manager = event.target.inputManager.value;
        payload.relationalObjectives = event.target.inputObjectives.value;
        if (payload.relationalObjectives === ""){
            delete payload.relationalObjectives
        }

        if (editable) {
            //await Api.patch("objective", id, payload);
            console.log("PATCH", payload);
        } else {
            //await Api.post("objective", payload);
            console.log("POST", payload);
        }

        //history.push("/team/" + teamId);
    };

    const fetchGetManagersList = async () => {
        const response = await Api.getAll("team-partner");
        const result = await response.json();
        setManagers(result);
    };

    const [selectedObjectives, setSelectedObjectives] = useState([]);
    const [showObjectives,setShowObjectives] = useState({display:"none"});
    const teamObjectives=(event)=>{
        const selectElement = event.target;
        if(selectElement.childNodes[selectElement.selectedIndex].value!=="0"){
            const teamId = selectElement.value
            //fetchGetObjectives(teamId);
            setSelectedObjectives(["item1","item2"]);
            setShowObjectives({display:"flex"});
        }else{
            setSelectedObjectives([]);
            setShowObjectives({display:"none"});
        }
    }
    
    const [teamList, setTeamList] = useState([
        {
            id:0,
            name:" "
        }
    ]);

    const fetchGetTeamsList = async () => {
        const response = await Api.getAll('team')
        const result = await response.json()
        result.unshift({
            id:0,
            name:" "
        })
        setTeamList(result)
    }

    const fetchGetObjectives = async (teamId) => {
        const response = await Api.getById('objective', teamId)
        const result = await response.json()
        setSelectedObjectives(result);
    }

    return (
        <div className="body register">
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable ? "Edit Objective" : "New Objective"}
                    <CancelLabel />
                </Title>
                <fieldset>
                    <Input
                        inputType="text"
                        inputName="inputName"
                        inputHolder="Objective Name"
                        inputRequired={true}
                    ></Input>
                    <Input
                        inputType="number"
                        inputName="inputFrequency"
                        inputHolder="key Result Frequency"
                        inputRequired={true}
                    ></Input>
                    <Input
                        classname="objective-description"
                        inputType="text"
                        inputName="inputDescription"
                        inputHolder="Objective Description"
                        inputRequired={true}
                    ></Input>
                     <Title classname="sub-title" htmlfor="inputManager">Objective Manager</Title>
                    <Select 
                        name="inputManager"
                        values={managers} 
                        eventAction={false}
                    ></Select>
                    <Title classname="sub-title" htmlfor="inputTeam">Relational Objective (Team)</Title>
                    <Select 
                        name="inputTeam"
                        values={teamList} 
                        eventAction={teamObjectives}
                    ></Select>
                    <Box 
                        classname="relations"
                        style={showObjectives}
                    >
                        <Title classname="sub-title" htmlfor="inputObjectives">Relational Objective</Title>
                        <Select 
                            style={showObjectives}
                            name="inputObjectives"
                            values={selectedObjectives} 
                            eventAction={false}
                        ></Select>
                    </Box>
                    <Title classname="sub-title" htmlfor="inputStartDate">Objective Start Date</Title>
                    <Input
                        inputType="date"
                        inputName="inputStartDate"
                        inputHolder=""
                        inputRequired={true}
                    ></Input>
                    <Title classname="sub-title" htmlfor="inputFinalDate">Objective End Date</Title>
                    <Input
                        inputType="date"
                        inputName="inputFinalDate"
                        inputHolder=""
                        inputRequired={true}
                    ></Input>
                </fieldset>
                {editable ? <Button>Save</Button> : <Button>Register</Button>}
            </Form>
        </div>
    );
}
