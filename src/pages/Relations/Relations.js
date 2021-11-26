import React,{useState, useEffect} from 'react';
import Table from '../../components/Table/Table';
import TableTitle from '../../components/TableTitle/TableTitle';
import TableLine from '../../components/TableLine/TableLine';
import { useParams } from "react-router-dom";
import './Relations.css';
import Box from '../../components/Box/Box';
import Api from '../../api/api';

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
            id:2,
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

    const fetchGetRelatedObjectives = async () => {
        const response = await Api.getById("objective/lista", id)
        const result = await response.json()
        const data = result.relatedObjectives.map(relatedItem => ({
            id: relatedItem.id,
            name: relatedItem.name,
            team: relatedItem.team.name
        }))
        setRelations(data)
    }

    useEffect(() => {
        fetchGetRelatedObjectives()
    }, [])

    return (
        <div className="body relations">
            <Box classname="relations-title">
                <label>{localStorage.getItem("defaultObjective")}</label>
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