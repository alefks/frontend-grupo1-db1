import React,{useState} from 'react';
import { Link,useHistory } from "react-router-dom";
import Pencil from './../../img/icons/pencilBk.png';
import List from './../../img/icons/list.png';
import Relation from './../../img/icons/relations.png';
import Trash from './../../img/icons/trash.png';
import DeleteItem from "../DeleteItem/DeleteItem";
import Modal from '../Modal/Modal';
import './TableLine.css';
export default function TableLine(props){
    const [table,setTable] = useState(undefined);
    const history = useHistory();
    const [showModal,setShowModal] = useState({display:"none"});
    let values = Object.values(props.values).slice(1);
    let keyColor = {};
    if(props.objectName==="keyresult"){
        values = values.slice(0,-1)
        keyColor = {
            backgroundColor: Object.values(props.values).slice(1)[5]
        }
    }
    const goToKeyResults = ()=>{
        if(props.objectName==="objective"){
            if(localStorage.getItem("defaultObjective")){
                localStorage.removeItem("defaultObjective");
            }
            localStorage.setItem("defaultObjective",props.values.name);
        }
        history.push("/team/objective/keyresults/"+props.values.id);
    }
    const goToRelations = ()=>{
        if(props.objectName==="objective"){
            if(localStorage.getItem("defaultObjective")){
                localStorage.removeItem("defaultObjective");
            }
            localStorage.setItem("defaultObjective",props.values.name);
        }
        history.push("/team/objective/relations/"+props.values.id);
    }
    const openModal = (event)=>{
        event.preventDefault();
        setTable(props.objectName);
        if(JSON.stringify(showModal)===JSON.stringify({display:"none"})){
            setShowModal({display:"flex"});
        }else{
            setShowModal({display:"none"});
        }
    };
    return (
            <tr onClick={props.select?props.select:undefined} className={props.select?"selected":""} style={props.style} objectiveid={props.values.id?props.values.id:0} id={props.objectiveId?props.values.id:0}>
                {values.map((value,index)=>(
                    <td key={index}>{props.objectName==="keyresult"?
                        index===4?
                            <div className='status'><hr className='feeling'/>{value}<hr className='feeling' style={keyColor}/></div>
                        :
                            value
                    :value}</td>
                ))}
                {props.objectName!=="objective"?"":
                    <td key={5} className="icons">
                        <td className="content-icons">
                        <div className="list" onClick={goToRelations}>
                            <img src={Relation} className="list-relations" alt="relations" />
                            <span className="legend legend-conect">
                                Go to related Objetives
                            </span>
                        </div>
                        <div className="list" onClick={goToKeyResults}>
                            <img src={List} className="list-krs" alt="krs" />
                            <span className="legend legend-conect">
                                Go to keyR list
                            </span>
                        </div>
                        
                        <Link to={"/team/registerobjectives/"+props.teamId+"/"+props.values.id}>
                            <img src={Pencil} className="edit" alt="edit" />
                            <span className="legend legend-conect">
                                Edit this objective
                            </span>
                        </Link>
                        <div className="trash" onClick={openModal}>
                            <img src={Trash} className="trash-icon" alt="trash" />
                            <span className="legend legend-conect">
                                Delete this Objective
                            </span>
                        </div>
                        </td>
                    </td>
                }
                {props.objectName!=="keyresult"?"":
                    <td key={6} className="icons">
                        <td className="content-icons">
                         <Link to={"/team/objective/registerkeyresult/"+props.objectiveId+"/"+props.values.id}>
                            <img src={Pencil} className="edit" alt="edit" />
                            <span className="legend legend-conect">
                                Edit this keyResult
                            </span>
                        </Link>
                        <div className="trash" onClick={openModal}>
                            <img src={Trash} className="trash-icon" alt="trash" />
                            <span className="legend legend-conect">
                                Delete this Objective
                            </span>
                        </div>
                        </td>
                    </td>
                }
                {props.objectName!=="relations"?"":
                    <td key={6} className="icons">
                        <td className="content-icons">
                        <div className="trash" onClick={openModal}>
                            <img src={Trash} className="trash-icon" alt="trash" />
                            <span className="legend legend-conect">
                                Delete this Objective
                            </span>
                        </div>
                        </td>
                    </td>
                }
                <Modal style={showModal}>
                        <DeleteItem lang={props.lang} closeButton={openModal} idItem={props.values.id} objectiveId={props.objectiveId || undefined} table={table}></DeleteItem>
                </Modal> 
            </tr>
    );
}