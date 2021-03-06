import React, { useState, useEffect } from "react";
import { useParams,useHistory } from "react-router-dom";
import "./RegisterObjectives.css";
import Box from "../../components/Box/Box";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import Api from "../../api/api";
import Select from "../../components/Select/Select";
import MessageToast from "../../components/MessageToast/MessageToast";
export default function RegisterObjectives(props) {
    const history = useHistory();
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
    const [message,setMessage] = useState({mssg:"",show:false});
    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchGetObjective(id);
        }
        setMessage({mssg:"",show:false});
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
            const response = await Api.patch("objective", id, payload);
            switch(response.status){
                case 400 :
                    setMessage({mssg:lang.page.messages.error,show:true});
                    break;
                case 200 :
                    if(localStorage.getItem("message")){
                        localStorage.removeItem("message");
                    }
                    localStorage.setItem("message",[lang.page.messages.edit]);
                window.setTimeout(()=>{history.goBack()},3000);
                break;
            }
        } else {
            const response = await Api.post("objective", payload);
            switch(response.status){
                case 500 :
                    setMessage({mssg:lang.page.messages.error,show:true});
                    break;
                case 400 :
                    setMessage({mssg:lang.page.messages.exists,show:true});
                    break;
                case 201 :
                    if(localStorage.getItem("message")){
                        localStorage.removeItem("message");
                    }
                    localStorage.setItem("message",[lang.page.messages.register]);
                    window.setTimeout(()=>{history.goBack()},3000);
                    break;
            }
        }

        
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
            fetchGetTeamObjectives(teamId);
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
    };

    const fetchGetTeamObjectives = async (id) => {
        const response = await Api.getById('team', id)
        const result = await response.json()
        setSelectedObjectives(result.objectives);
    }

    return (
        <div className="body register">
            {message.show?
                    <MessageToast message={message.mssg}/>
                :
                    ""
            }
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
