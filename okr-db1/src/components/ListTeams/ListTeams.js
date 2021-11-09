import React from "react";
import ListTeamsItem from "../ListTeamsItem/ListTeamsItem";
import TitleBox from "../TitleBox/TitleBox";
import './ListTeams.css';

export default function ListTeams(props){
    return (
        <section className="list-teams">
            <TitleBox classname="task-title">
                Teams
                {props.children}
            </TitleBox>
            <fieldset>
                <legend>{props.year}</legend>
                <div className="list">
                    {props.teams.map((team,index)=>(
                        <ListTeamsItem key={index} team={team} />
                    ))}
                </div>
            </fieldset>
        </section>
    );
}
