import React from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableTitle from "../../components/TableTitle/TableTitle";
import TableLine from "../../components/TableLine/TableLine";
import "./KeyResults.css";
import { useState, useEffect } from "react/cjs/react.production.min";
import Api from "../../api/api";

export default function KeyResults() {
    const { objectiveId } = useParams();
    const [keyResults, setKeyResults] = useState(testKeyResults);
    const testKeyResults = [
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
        {
            id: 1,
            name: "key teste",
            description: "testesando",
            goal: 20,
            achieved: 30,
            frequency: "",
            responsibleId: 1,
            checkinDates: [],
        },
    ];

    const fetchGetKeyResults = async () => {
        const response = await Api.getById("objective", objectiveId);
        const result = await response.json().keyResults;
        setKeyResults(result);
    };

    useEffect(() => {
        fetchGetKeyResults();
    }, []);

    const titles = [
        "Name",
        "Description",
        "Goal",
        "Achieved",
        "Frequency",
        "ResponsibleId",
    ];
    return (
        <div className="body keyresults">
            <Table>
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {keyResults.map((keyResult) => (
                        <TableLine
                            values={keyResult}
                            key={keyResult.id}
                            objectName={"keyresult"}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
