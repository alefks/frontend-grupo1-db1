import React from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import Title from "../Title/Title";
import CancelLabel from "../CancelLabel/CancelLabel";
import "./DeleteItem.css";
import Api from "../../api/api";

export default function DeleteItem(props) {
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
    };
    return (
        <Form submitAction={deleteItem} classname="form delete">
            <Title classname="title">
                Are you really sure
                <br />
                about deleting this?
                <CancelLabel closeButton={true} action={props.closeButton} />
            </Title>
            <Button>Confirm</Button>
        </Form>
    );
}
