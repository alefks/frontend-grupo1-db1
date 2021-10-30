import React from "react";
import './CheckPoints.css';
import Form from './../../components/Form/Form';
import Input from './../../components/Input/Input';
import Button from './../../components/Button/Button';
import TitleBox from "../../components/TitleBox/TitleBox";
import NoteBlock from "../../components/NoteBlock/NoteBlock";
import Box from "../../components/Box/Box";
export default function CheckPoints(){
    return (
        <Form classname="form-refresh">
            <section className="box">
                <TitleBox titleText="OKR's" boxClassName="points" titleClassName="task-title">

                </TitleBox>
                <Box classname="box-block">
                    <NoteBlock boxClassName="note-block" titleClassName="note-title" titleText="Note Block">
                    
                    </NoteBlock>
                    <Button classname="button-refresh">
                        Save
                    </Button>
                </Box>
            </section>
        
        </Form>
    );
}