import React from "react";
import TableLine from "./../TableLine/TableLine";
import './GoalsTable.css';
export default function GoalsTable(props){
    const tableTitles = ["Okr","KEY RESULT","GOAL OWNER","FREQUENCE TIME","GOAL TYPE","START DATE","FINAL DATE"]
    const tableValues = [
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
        {
            okr: "new okr",
            keyResult: 30,
            goalOwner: "leandro",
            frequenceTime: "1 week",
            goalType: "win",
            startDate: "25/01/2020",
            finalDate: "27/08/2022"
        },
    ]
    return (
            <table className="table">
                <TableLine lineValues={tableTitles} classname={'title'}></TableLine>
                <TableLine lineValues={tableValues} classname={'line'}></TableLine>
            </table>  
    );
       
    
}  