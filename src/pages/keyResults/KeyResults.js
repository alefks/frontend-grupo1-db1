import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import CheckPointsList from "../../components/CheckPointsList/CheckPointsList";
import "./KeyResults.css";
export default function KeyResults() {
    const { objectiveId } = useParams();
    
    return (
        <div className="body keyresults">
            <KeyResultsList objectiveId={objectiveId}></KeyResultsList>
            <CheckPointsList objectiveId={objectiveId}></CheckPointsList>
        </div>
    );
}
