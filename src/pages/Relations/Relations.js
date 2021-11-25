import React,{useState} from 'react';
import Table from '../../components/Table/Table';
import TableTitle from '../../components/TableTitle/TableTitle';
import TableLine from '../../components/TableLine/TableLine';
import { useParams } from "react-router-dom";
import './Relations.css';
import Box from '../../components/Box/Box';

export default function Relations(props){
    const {id} = useParams();
    const lang = props.lang.Relations.page;
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
    const titles = lang.table.title;

    return (
        <div className="body relations">
            <Box classname="relations-title">
                <label>{"Objective"}</label>
                {lang.table.name}
            </Box>
            <Table className="relations-list">
                <TableTitle titles={titles} />
                <tbody className="tbody">
                    {relations.map((objective,index) => (
                        <TableLine
                            lang={props.lang}
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