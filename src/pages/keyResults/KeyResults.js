import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import KeyResultsList from "../../components/KeyResultsList/KeyResultsList";
import CheckPointsList from "../../components/CheckPointsList/CheckPointsList";
import MessageToast from "../../components/MessageToast/MessageToast";
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
    const [message,setMessage] = useState({mssg:"",show:false});
    useEffect(()=>{
        if(localStorage.getItem("message")){
            setMessage({mssg:localStorage.getItem("message"),show:true});
            localStorage.removeItem("message");
        }
    },[]);
    return (
        <div className="body keyresults">
            {message.show?
                    <MessageToast message={message.mssg}/>
                :
                    ""
            }
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
