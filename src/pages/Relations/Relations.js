import React,{useState} from 'react';
import Table from '../../components/Table/Table';
import TableTitle from '../../components/TableTitle/TableTitle';
import TableLine from '../../components/TableLine/TableLine';
import { useParams } from "react-router-dom";
import './Relations.css';
import Box from '../../components/Box/Box';

export default function Relations(){
    const {id} = useParams();
    const [relations,setRelations] = useState([
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },

        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },
        {
            id:1,
            name:'testar',
            team:'finance'
        },

    ])
    const titles = ['objective','Team'];

    return (
        <div className="body relations">
            <Box classname="relations-title">
                <label>{"Objective"}</label>
                Related to:
            </Box>
            <Table className="relations-list">
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {relations.map((objective,index) => (
                        <TableLine
                            teamId={id}
                            values={objective}
                            key={index}
                            objectName={"relations"}
                        />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}