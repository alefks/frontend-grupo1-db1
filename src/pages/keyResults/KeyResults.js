import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import Table from "../../components/Table/Table";
import TableTitle from "../../components/TableTitle/TableTitle";
import TableLine from "../../components/TableLine/TableLine";
import Api from "../../api/api";
import Box from "../../components/Box/Box";
import "./KeyResults.css";
export default function KeyResults() {
    const { objectiveId } = useParams();
    const keyResultMap = [
        {
            id: 0,
            name: "",
            description: "",
            goal: 0,
            achieved: 0,
            frequency: "",
            responsibleId: 0,
            checkinDates: [],
        }
    ];
    const [keyResults, setKeyResults] = useState(keyResultMap);
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
        // const response = await Api.getById("objective", objectiveId);
        // const result = await response.json().keyResults;
        // setKeyResults(result);
        setKeyResults(testKeyResults)
    };

    useEffect(() => {
        fetchGetKeyResults();
    }, [JSON.stringify(keyResults)]);

    const titles = [
        "Name",
        "Description",
        "Goal",
        "Achieved",
        "Frequency",
        "Responsible",
    ];
    return (
        <div className="body keyresults">
            <Box classname="title">Key Results</Box>
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
            <Box classname="title title2">Checkin Dates</Box>
            <Box classname="check-points">
                <Box classname="check-date">

                </Box>
                <Box classname="check-date">
                        
                </Box>
                        
            </Box>
        </div>
    );
}
