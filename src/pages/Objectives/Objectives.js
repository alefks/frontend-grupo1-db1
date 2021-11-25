import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableLine from "../../components/TableLine/TableLine";
import TableTitle from "../../components/TableTitle/TableTitle";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import Box from "../../components/Box/Box";
import ObjectivesLoader from "../../components/ContentLoaders/ObjectivesLoader";
import Api from "../../api/api";
import "./Objectives.css";

export default function Objectives(props) {
    const lang = props.lang;
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

    // const testObjectives = [
    //     {
    //         id: 1,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 2,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 3,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 4,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 5,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 6,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 7,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 8,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 9,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 10,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 11,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    //     {
    //         id: 12,
    //         name: "go test",
    //         description: "testing table",
    //         startDate: date,
    //         endDate: date,
    //         manager: "",
    //     },
    // ];
    const [objectives, setObjectives] = useState([]);
    

    const { teamId, year, quarter } = useParams();
    
    const titles = lang.Objectives.page.table.title;
    const [loading,setLoading] = useState(true);
    const fetchGetObjectives = async () => {
        const response = await Api.getAll(`objective/${teamId}/${year}/${quarter}`);
        const result = await response.json();
        const value = [];
        for(let i =0;result.length>i;i++){
            let dateStart = new Date(result[i].startDate);
            let dateFinal = new Date(result[i].endDate);
            value.push(
                {
                    id:result[i].id,
                    name:result[i].name,
                    description: result[i].description,
                    start:dateStart.getUTCDate()+"/"+(dateStart.getUTCMonth()+1)+"/"+dateStart.getUTCFullYear(),
                    end:dateFinal.getUTCDate()+"/"+(dateFinal.getUTCMonth()+1)+"/"+dateFinal.getUTCFullYear(),
                    manager:result[i].manager.name
                }
            )
        }

        if(value.length!==0){
            setObjectives(value);
            setSelection(value[0].id);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchGetObjectives();
    }, []);
    if(loading){
        return(
        <ObjectivesLoader />
        );
    }else{
    return (
        <div className="body objectives">
            <Box classname="boxtitle">
                {lang.Objectives.page.table.name}
            </Box>
            <Table className="objectives-list">
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {objectives.map((objective,index) => (
                        <TableLine
                            lang={props.lang}
                            teamId={teamId}
                            values={objective}
                            key={index}
                            objectName={"objective"}
                            select={select}
                            style={objective.id===selection?{backgroundColor:"var(--colorSelection)"}:{}}
                        />
                    ))}
                </tbody>
            </Table>
            {selection && <KeyResultsList langDelete={props.lang} classname="boxtitle2" objectiveId={selection} lang={lang.KeyResults.page}></KeyResultsList>}
        </div>
    );
    }
}
