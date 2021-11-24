import React from "react";
import { Link } from "react-router-dom";
import Box from "../Box/Box";
import './CheckPointsList.css';

export default function CheckPointsList(props){
    const date = new Date();
    const now =(date.getDay())+"-"+((date.getMonth())+1)+"-"+(date.getFullYear());
    return (
        <div className="check-points-box">
            <Box classname="boxtitle boxtitle2">{props.lang.box.name}</Box>
            <Box classname="check-points">
                <Box classname="check-date">
                    <Link to={"/team/objective/keyresults/checkpoint/"+props.objectiveId+"/"+now}>
                        {now}
                    </Link>
                </Box>                        
            </Box>
        </div>
    );
}