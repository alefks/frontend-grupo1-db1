import React from "react";
import { Link } from "react-router-dom";
import Box from './../../components/Box/Box';
import './Home.css';

export default function Home(){
    const teamsList = [
        {
            id : 1,
            name : "financeiro",
            objectives : [],
            teamPartners : [],
            score : 50
        }
    ];
    return (
        <div className="body">
            <Box classname="teams-list">
                {teamsList.map((teamItem)=>(
                    <Box classname="teams-item" key={teamItem.id}>
                        <Link to={"/team/"+teamItem.id}>
                            <label className="team-name">
                                {teamItem.name}
                            </label>
                            <label className="team-score">
                                {teamItem.score}%
                            </label>
                            <hr className={"team-score-color "+"alert"} />
                        </Link>
                    </Box>
                ))}
            </Box>
        </div>
    ); 
}