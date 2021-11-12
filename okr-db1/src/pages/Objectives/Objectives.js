import React,{ useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableLine from "../../components/TableLine/TableLine";
import TableTitle from "../../components/TableTitle/TableTitle";
import './Objectives.css';
export default function Objectives(){
    const { id, startDate, endDate } = useParams();
    const titles=["Name","Description","Start Date","End Date","Manager"];
    const newDate = new Date();
    const date = (newDate.getDay())+"-"+((newDate.getMonth())+1)+"-"+(newDate.getFullYear())
    const objecives = [
        {
            id:1,
            name:"go test",
            description: "testing table",
            startDate   : date,
            endDate     : date,
            manager:"",  
        },
        
    ];
    return (
        <div className="body objectives">
            <Table>
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {objecives.map((objective)=>(
                        <TableLine values={objective} idTeam={id} key={objective.id} objectName={"objective"}/>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}