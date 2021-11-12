import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableLine from "../../components/TableLine/TableLine";
import TableTitle from "../../components/TableTitle/TableTitle";
import "./Objectives.css";
import Api from "../../api/api";

export default function Objectives() {
    const [objectives, setObjectives] = useState(testObjectives);

    const { id, startDate, endDate } = useParams();
    const titles = ["Name", "Description", "Start Date", "End Date", "Manager"];
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
    ];

    const fetchGetObjectives = async () => {
        const response = await Api.getAll("objective");
        const result = await response.json();
        setObjectives(result);
    };

    useEffect(() => {
        fetchGetObjectives();
    }, []);

    return (
        <div className="body objectives">
            <Table>
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {objectives.map((objective) => (
                        <TableLine
                            values={objective}
                            key={objective.id}
                            objectName={"objective"}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
