import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Title from "../Title/Title";
import CancelLabel from "../CancelLabel/CancelLabel";
import "./DeleteItem.css";
import Api from "../../api/api";

export default function DeleteItem(props) {
    const lang = props.lang.DeleteItem.page;
    const deleteItem = async (event) => {
        event.preventDefault();
        if (props.table === "objective") {
            await Api.delete("objective", props.idItem);
        } else if (props.table === "keyresult") {
            await Api.delete("keyresult", props.idItem);
        } else if (props.table === "partner") {
            const payload = {
                disconnectTeam: +props.teamId,
            };
            await Api.patch("team-partner", props.idItem, payload);
        }
        props.closeButton(event);
    };
    return (
        <Form submitAction={deleteItem} classname="form delete">
            <Title classname="title">
                {lang.text.split('\n')[0]}
                <br/>
                {lang.text.split('\n')[1]}
                <CancelLabel closeButton={true} action={props.closeButton} />
            </Title>
            <div className="buttons-group-modal">
                <CancelLabel classname={"button cancel-button"} closeButton={true} action={props.closeButton}>{lang.cancel}</CancelLabel>
                <Button classname="button confirm-button" goback={false}>{lang.button}</Button>
            </div>
        </Form>
    );
}
