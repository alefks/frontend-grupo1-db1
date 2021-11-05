import React from 'react';
import './TableLine.css';
export default function TableColumn(props){
    
    return (
            props.classname === "title"?
            <thead className='table'>
            <tr className={"title"}>
                {
                    props.lineValues.map((value,index)=>(
                        <th className={"column"} key={"column"+index}>
                            {value}
                        </th>
                    ))
                }
            </tr>
            </thead>
                :
            <tbody className='table'>
                {props.lineValues.map((value,index)=>(
                    <tr className={"line"} key={value.id}>
                        <td className={"column"}>
                            {value.name}
                        </td>
                        <td className={"column"}>
                            {value.description}
                        </td>
                        <td className={"column"}>
                            {value.goal}
                        </td>
                        <td className={"column"}>
                            {value.responsibleId}
                        </td>
                        <td className={"column"}>
                            {value.frequency}
                        </td>
                        <td className={"column"}>
                            {value.achieved} %
                        </td>
                    </tr>
                ))}
            </tbody> 
    );
};