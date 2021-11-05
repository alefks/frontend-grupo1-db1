import React from "react";
import Form from './../../components/Form/Form';
import Button from './../../components/Button/Button';
import TitleBox from "../../components/TitleBox/TitleBox";
import NoteBlock from "../../components/NoteBlock/NoteBlock";
import Box from "../../components/Box/Box";
import CheckPointsList from "../../components/CheckPointsList/CheckPointsList";
import CheckPointItem from "../../components/CheckPointItem/CheckPointItem";
import BoxButton from "../../components/BoxButton/BoxButton";
import './CheckPoints.css';

export default function CheckPoints(){
    return (
        <Form classname="form-refresh">
            <section className="box">
                <Box classname="points">
                    <TitleBox classname="task-title" >
                        kR's
                    </TitleBox>
                    <CheckPointsList>
                        <CheckPointItem okr={"kr name"} name={"name person"} />
                    </CheckPointsList>
                </Box>
                <Box classname="box-block">
                    <NoteBlock boxClassName="note-block" titleClassName="task-title" titleText="Note Block">
                    
                    </NoteBlock>
                    
                </Box>
            </section>
            <BoxButton>
                <Button classname="button cancel">
                    Cancel
                </Button>
                <Button classname="button-refresh">
                    Save
                </Button>
            </BoxButton>
        </Form>
    );
}