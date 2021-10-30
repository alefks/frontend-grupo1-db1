import React from "react";
import Box from "../Box/Box";
export default function NoteBlock(props){
    return(
        <Box classname={props.boxClassName}>
            <label className={props.titleClassName}>
                {props.titleText}
            </label>
            <textarea name="inputNoteBlock" className="note">

            </textarea>
        </Box>
    );
    
}