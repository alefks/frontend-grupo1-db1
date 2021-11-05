import React from "react";
import TableLine from "./../TableLine/TableLine";
import './GoalsTable.css';
export default function GoalsTable(props){
    const tableTitles = ["Key-R NAME","Description","GOAL","GOAL OWNER","FREQUENCE TIME","Achivied"]
    const tableValues = [
        {
            id            :1,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :2,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :3,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :4,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :5,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :6,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
        {
            id            :7,
            name          :"gogogo",
            description   :"going",
            goal          :null,
            achieved      :0,
            frequency     :"weak",
            responsibleId :1,
            objectiveId   :1,
            checkinDates  :[]
        },
    ]
    return (
            <table className="table">
                <TableLine lineValues={tableTitles} classname={'title'}></TableLine>
                <TableLine lineValues={tableValues} classname={'line'}></TableLine>
            </table>  
    );
       
    
}  