import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableLine from "../../components/TableLine/TableLine";
import TableTitle from "../../components/TableTitle/TableTitle";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import Box from "../../components/Box/Box";
import Api from "../../api/api";
import "./Objectives.css";

export default function Objectives() {
    const [selection,setSelection] = useState(undefined); 
    const select = (event)=>{
        setSelection(parseInt(event.target.parentElement.getAttribute('objectiveid')));
    }
    const newDate = new Date();
    const date =
        newDate.getDay() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getFullYear();

    const testObjectives = [
        {
            id: 1,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 2,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 3,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 4,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 5,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 6,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 7,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 8,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 9,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 10,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 11,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
        {
            id: 12,
            name: "go test",
            description: "testing table",
            startDate: date,
            endDate: date,
            manager: "",
        },
    ];
    const [objectives, setObjectives] = useState(testObjectives);
    

    const { id, year, quarter } = useParams();
    
    const titles = ["Name", "Description", "Start Date", "End Date", "Manager"];
    
    const fetchGetObjectives = async () => {
        const response = await Api.getAll(`objective/${year}/${quarter}`);
        const result = await response.json();
        setObjectives(result);
        setSelection(result[0].id)
    };

    useEffect(() => {
        //setSelection(objectives[0].id); // temporário até liberar o fetch
        fetchGetObjectives(); // comentei para poder utilisar o useEffect sem erro
    }, [JSON.stringify(objectives)]);

    return (
        <div className="body objectives">
            <Box classname="boxtitle">
                Objectives
            </Box>
            <Table className="objectives-list">
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {objectives.map((objective,index) => (
                        <TableLine
                            teamId={id}
                            values={objective}
                            key={index}
                            objectName={"objective"}
                            select={select}
                            style={objective.id===selection?{backgroundColor:"var(--colorSelection)"}:{}}
                        />
                    ))}
                </tbody>
            </Table>
            <KeyResultsList classname="boxtitle2" objectiveId={selection}></KeyResultsList>
        </div>
    );
}
