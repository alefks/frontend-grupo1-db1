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
                    <tr className={"line"} key={index}>
                        <td className={"column"}>
                            {value.okr}
                        </td>
                        <td className={"column"}>
                            {value.keyResult} %
                        </td>
                        <td className={"column"}>
                            {value.goalOwner}
                        </td>
                        <td className={"column"}>
                            {value.frequenceTime}
                        </td>
                        <td className={"column"}>
                            {value.goalType}
                        </td>
                        <td className={"column"}>
                            {value.startDate}
                        </td>
                        <td className={"column"}>
                            {value.finalDate}
                        </td>
                    </tr>
                ))}
            </tbody> 
    );
};