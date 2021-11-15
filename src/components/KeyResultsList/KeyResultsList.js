import React,{ useState, useEffect } from 'react';
import Box from '../Box/Box';
import Table from '../Table/Table';
import TableTitle from '../TableTitle/TableTitle';
import TableLine from '../TableLine/TableLine';
import './KeyResultsList.css';

export default function KeyResultsList(props){
    const objectiveId = props.objectiveId;
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
        <div className="key-results-list">
            <Box classname={!props.classname?"boxtitle":"boxtitle "+props.classname}>Key Results</Box>
            <Table>
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {keyResults.map((keyResult,index) => (
                        <TableLine
                            objectiveId={objectiveId}
                            values={keyResult}
                            key={index}
                            objectName={"keyresult"}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}