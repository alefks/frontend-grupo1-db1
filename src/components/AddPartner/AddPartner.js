import React, { useState, useEffect } from "react";
import Form from "./../Form/Form";
import Button from "./../Button/Button";
import CancelLabel from "../CancelLabel/CancelLabel";
import Title from "../Title/Title";
import "./AddPartner.css";
import Api from "../../api/api";
import { useParams } from "react-router-dom/cjs/react-router-dom";

export default function AddPartner(props) {
    const lang = props.lang.AddPartner.page;
    const { teamId } = useParams();

    const partnersTestList = [
        {
            id: 1,
            name: "andreia",
        },
        {
            id: 2,
            name: "joao",
        },
    ];
    const [partners, setPartners] = useState(partnersTestList);

    const fetchGetTeamPartnersList = async () => {
        const response = await Api.getAll("team-partner");
        const result = await response.json();
        setPartners(result);
    };

    useEffect(() => {
        fetchGetTeamPartnersList();
    }, []);

    const getInputValues = async (event) => {
        event.preventDefault();
        const payload = {
            teamPartners: [+event.target.partner.value],
        };

        await Api.patch('team', teamId, payload)
        
        window.location.reload();
    };
    
    return (
        <Form classname={"form add"} submitAction={getInputValues}>
            <Title classname="title">
                {lang.form.option1}
                <CancelLabel action={props.closeButton} closeButton={true} />
            </Title>
            <select name="partner" id="cars" className="input">
                {partners.map((value) => (
                    <option
                        className="select-item"
                        value={value.id}
                        key={value.id}
                    >
                        {value.name}
                    </option>
                ))}
            </select>
            <div className="buttons-group-modal">
                <CancelLabel classname={"button cancel-button"} closeButton={true} action={props.closeButton}>{lang.cancel}</CancelLabel>
                <Button classname={"button confirm-button"}>{lang.button}</Button>
            </div>
        </Form>
    );
}
