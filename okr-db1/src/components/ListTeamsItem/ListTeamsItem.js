import React from "react";
import { Link } from "react-router-dom";
import './ListTeamsItem.css';
export default function ListTeamsItem(props){
    const color ={
        backgroundColor:""
    }
    const colorDefine = (
        props.team.totalValue<=33?
            color.backgroundColor="red"
        :
        props.team.totalValue<=66 && props.team.totalValue>33?
            color.backgroundColor="#FFC300"
        :color.backgroundColor="green"
    );
    return (
       
        <article className="team" key={props.team.id} style={{backgroundColor:colorDefine}}>
             <Link to={"/team/"+props.team.id}>  
                {props.team.departmentName}
            <div className="level">
                {props.team.totalValue} %
            </div>
            </Link>
        </article>
    );
}