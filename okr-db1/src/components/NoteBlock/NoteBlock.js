import React from "react";
import Box from "../Box/Box";
import TitleBox from "../TitleBox/TitleBox";
import './NoteBlock.css';
export default function NoteBlock(props){
    return(
        <Box classname={props.boxClassName}>
            <TitleBox classname={props.titleClassName}>
                {props.titleText}
            </TitleBox>
            <textarea name="inputNoteBlock" className="note">

            </textarea>
        </Box>
    );
    
}