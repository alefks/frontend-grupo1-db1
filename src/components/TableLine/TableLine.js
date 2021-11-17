import React,{useState} from 'react';
import { Link } from "react-router-dom";
import Pencil from './../../img/icons/pencilBk.png';
import List from './../../img/icons/list.png';
import Relation from './../../img/icons/relations.png';
import Trash from './../../img/icons/trash.png';
import DeleteItem from "../DeleteItem/DeleteItem";
import Modal from '../Modal/Modal';
import './TableLine.css';
export default function TableLine(props){
    const [table,setTable] = useState(undefined);
    const [showModal,setShowModal] = useState({display:"none"});
    let values = Object.values(props.values).slice(1);
    if(props.objectName==="keyresult"){
        values = values.slice(0,-1)
    };
    const openModal = ()=>{
        setTable(props.objectName);
        if(JSON.stringify(showModal)===JSON.stringify({display:"none"})){
            setShowModal({display:"flex"});
        }else{
            setShowModal({display:"none"});
        }
    };
    return (
            <tr onClick={props.select?props.select:undefined} className={props.select?"selected":""} style={props.style} objectiveid={props.values.id?props.values.id:0}>
                {values.map((value,index)=>(
                    <td key={index}>{value}</td>
                ))}
                {props.objectName!=="objective"?"":
                    <td key={5} className="icons">
                        <Link to={"/relations/"+props.values.id}>
                            <img src={Relation} className="list-relations" alt="relations" />
                            <span className="legend legend-conect">
                                Go to related Objetives
                            </span>
                        </Link>
                        <Link to={"/keyresults/"+props.values.id}>
                            <img src={List} className="list-krs" alt="krs" />
                            <span className="legend legend-conect">
                                Go to keyR list
                            </span>
                        </Link>
                        
                        <Link to={"/registerobjectives/"+props.teamId+"/"+props.values.id}>
                            <img src={Pencil} className="edit" alt="edit" />
                            <span className="legend legend-conect">
                                Edit this objective
                            </span>
                        </Link>
                        <div classsName="trash" onClick={openModal}>
                            <img src={Trash} className="trash-icon" alt="trash" />
                            <span className="legend legend-conect">
                                Delete this Objective
                            </span>
                        </div>
                    </td>
                }
                {props.objectName!=="keyresult"?"":
                    <td key={5} className="icons">
                         <Link to={"/registerkeyresult/"+props.objectiveId+"/"+props.values.id}>
                            <img src={Pencil} className="edit" alt="edit" />
                            <span className="legend legend-conect">
                                Edit this keyResult
                            </span>
                        </Link>
                        <div classsName="trash" onClick={openModal}>
                            <img src={Trash} className="trash-icon" alt="trash" />
                            <span className="legend legend-conect">
                                Delete this Objective
                            </span>
                        </div>
                    </td>
                }
                <Modal style={showModal}>
                        <DeleteItem closeButton={openModal} idItem={props.values.id} table={table}></DeleteItem>
                </Modal> 
            </tr>
    );
}