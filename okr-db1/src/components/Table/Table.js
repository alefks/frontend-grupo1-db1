import React from 'react';
import Box from '../Box/Box';
import './Table.css';
export default function Table(props){
    return (
        <Box classname="box-table">
            <table className="table" style={props.style}>
                {props.children}                
            </table>
        </Box>
    );
}