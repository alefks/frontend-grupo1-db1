import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import CheckPointsList from "../../components/CheckPointsList/CheckPointsList";
import "./KeyResults.css";
export default function KeyResults(props) {
    const { objectiveId } = useParams();
    const lang = props.lang.KeyResults.page;
    return (
        <div className="body keyresults">
            <KeyResultsList objectiveId={objectiveId} lang={lang}></KeyResultsList>
            <CheckPointsList objectiveId={objectiveId} lang={lang}></CheckPointsList>
        </div>
    );
}
