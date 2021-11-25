import React, { useState, useEffect } from "react";
import Box from "../Box/Box";
import Table from "../Table/Table";
import TableTitle from "../TableTitle/TableTitle";
import TableLine from "../TableLine/TableLine";
import KeyResultsListLoader from "../ContentLoaders/KeyResultsListLoader";
import "./KeyResultsList.css";
import Api from "../../api/api";

export default function KeyResultsList(props) {
    const objectiveId = props.objectiveId;
    const keyResultMap = [
        {
            id: 1,
            name: "",
            description: "",
            goal: 0,
            responsible: "",
            lastStatus: 0,
            lastFeeling: "",
        },
    ];
    const [keyResults, setKeyResults] = useState([]);
    const testKeyResults = [
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            responsible: "name",
            lastStatus: 0,
            lastFeeling: "#54C213",
        }];
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#00ffdd",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#54C213",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#54C213",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C23700",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#54C213",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C23700",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C2B91B",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C23700",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C2B91B",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C2B91B",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "#C23700",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    //     {
    //         id: 1,
    //         name: "key teste",
    //         description: "testesando",
    //         goal: 20,
    //         responsible: "name",
    //         lastStatus: 0,
    //         lastFeeling: "",
    //     },
    // ];
    const [loading,setLoading] = useState(true);
    const fetchGetKeyResults = async () => {
        const response = await Api.getById("objective", objectiveId);
        const result = await response.json();
        if(JSON.stringify(result)!==JSON.stringify([])&&response.status!==404&&response.status!==500){
            const value = result.keyResults.map(kr => {
                keyResultMap[0].id = kr.id;
                keyResultMap[0].name = kr.name;
                keyResultMap[0].description = kr.description;
                keyResultMap[0].goal = kr.goal;
               // keyResultMap[0].responsible = kr.responsible.name;
                keyResultMap[0].lastStatus = 0;
                keyResultMap[0].lastFeeling = "#54C213";

                return keyResultMap[0]
            }
            )
        //setKeyResults(value);
        setKeyResults(testKeyResults);
        }else if(response.status===404){
            console.log("This objective, do not have key results, create one or choise other objective!")
        }
        setLoading(false)
    };

    useEffect(() => {
        fetchGetKeyResults();
    }, []);

    const titles = props.lang.table.title;
    if(loading===true){
        return(
        <KeyResultsListLoader>

        </KeyResultsListLoader>
        );
    }else{
    return (
        <div className="key-results-list">
            <Box
                classname={
                    !props.classname
                        ? "boxtitle"
                        : "boxtitle " + props.classname
                }
            >
                {props.lang.table.name}
            </Box>
            <Table>
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {JSON.stringify(keyResults)!==JSON.stringify([])?
                        keyResults.map((keyResult, index) => (
                            <TableLine
                                lang={props.langDelete}
                                objectiveId={objectiveId}
                                values={keyResult}
                                key={index}
                                objectName={"keyresult"}
                                select={props.select}
                            />
                    )):""}
                </tbody>
            </Table>
        </div>
    );
    }
}
