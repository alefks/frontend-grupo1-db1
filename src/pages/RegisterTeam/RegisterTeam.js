import React, { useState, useEffect } from "react";
import "./RegisterTeam.css";
import Title from "../../components/Title/Title";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import CancelLabel from "../../components/CancelLabel/CancelLabel";
import { useParams } from "react-router-dom";
import Api from "../../api/api";
import MessageToast from "../../components/MessageToast/MessageToast";
import { useHistory } from "react-router";
export default function RegisterTeam(props) {
    const { id } = useParams();
    const history = useHistory();
    const [editable, setEditable] = useState(false);
    const [team, setTeam] = useState({ name: "" });
    const [message,setMessage] = useState({mssg:"",show:false});
    const lang = props.lang.RegisterTeam;

    useEffect(() => {
        if (id !== "new") {
            setEditable(true);
            fetchTeamById();
        }
        setMessage({mssg:"",show:false});
    }, []);

    const fetchTeamById = async () => {
        const response = await Api.getById("team", id);
        const result = await response.json();
        setTeam(result);
    };

    const getInputValues = async (event) => {
        event.preventDefault();
        let complementUrl = "";
        const defaultYear = new Date().getFullYear();
        const payload = {
            name: event.target.inputTeamName.value,
        };

        if (editable) {
            const response = await Api.patch("team", id, payload);
            complementUrl = id + "/" + defaultYear;
            switch(response.status){
                case 400 :
                    setMessage(lang.page.messages.error);
                case 201 :
                    setMessage(lang.page.messages.edit);
            }
        } else {
            const response = await Api.post("team", payload);
            const result = await response.json();
            complementUrl = result.id + "/" + defaultYear;
            switch(response.status){
                case 400 :
                    setMessage({mssg:lang.page.messages.error,show:true});
                case 201 :
                    setMessage({mssg:lang.page.messages.register,show:true});
            }
        }
        window.setTimeout(()=>{history.push("/team/" + complementUrl)},3000);
    };
    return (
        <div className="body">
            {message.show?
                    <MessageToast message={message.mssg}/>
                :
                    ""
            }
            <Form submitAction={getInputValues}>
                <Title classname="title">
                    {editable
                        ? lang.page.form.edit.option1
                        : lang.page.form.register.option1}
                    <CancelLabel />
                </Title>
                <Input
                    inputType="text"
                    inputName="inputTeamName"
                    inputHolder={lang.page.form.register.option2}
                    inputRequired={true}
                    inputDefaultValue={team.name}
                ></Input>
                <Button>
                    {editable
                        ? lang.page.button.edit
                        : lang.page.button.register}
                </Button>
            </Form>
        </div>
    );
}
