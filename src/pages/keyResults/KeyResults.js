import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import CheckPointsList from "../../components/CheckPointsList/CheckPointsList";
import Box from "../../components/Box/Box";
import "./KeyResults.css";
import CheckPointsByKey from "../../components/CheckPointsByKey/CheckPointsByKey";
export default function KeyResults(props) {
    const { objectiveId } = useParams();
    const [keyResultId,setKeyResultId] = useState(0)
    const lang = props.lang.KeyResults.page;
    const getKeyResultId = (event)=> {
        setKeyResultId(parseInt(event.target.parentElement.id));
    }
    return (
        <div className="body keyresults">
            <Box classname="boxtitle margin">
                {localStorage.getItem("defaultTeam")}
                <label>
                    {localStorage.getItem("defaultObjective")}
                </label>
            </Box>
            <KeyResultsList langDelete={props.lang} objectiveId={objectiveId} lang={lang} select={getKeyResultId}></KeyResultsList>
            <CheckPointsByKey lang={lang} keyResultId={keyResultId}></CheckPointsByKey>
        </div>
    );
}
