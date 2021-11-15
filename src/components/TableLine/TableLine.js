import React from "react";
import { Link } from "react-router-dom";
import Pencil from './../../img/icons/pencilBk.png';
import List from './../../img/icons/list.png';
import Relation from './../../img/icons/relations.png';
import './TableLine.css';
export default function TableLine(props){
    let values = Object.values(props.values).slice(1);
    if(props.objectName==="keyresult"){
        values = values.slice(0,-1)
    }
    return (
            <tr onClick={props.select?props.select:""} className={props.select?"selected":""} style={props.style} objectiveId={props.values.id}>
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
                    </td>
                }
            </tr>
    );
}