import React,{useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Modal from './../Modal/Modal';
import Arrow from './../../img/icons/arrow.png';
import './MenuItem.css';
import AddPartner from '../AddPartner/AddPartner';
import { useParams } from 'react-router-dom';
import AddRelation from '../AddRelation/AddRelation';

export default function MenuItem(props){
    const params = useParams();
    const history = useHistory();
   
    const [showModal,setShowModal] = useState({display:"none"});
    const openModal = ()=>{
        if(JSON.stringify(showModal)===JSON.stringify({display:"none"})){
            setShowModal({display:"flex"});
        }else{
            setShowModal({display:"none"});
        }
    };
    return (
        <div className="item">
            {
            !props.returnPage?
                !props.option.modal?
                    <div className="menu-item">
                        <Link to={props.option.route==='/team/registerobjectives/'||props.option.route==='/team/objective/registerkeyresult/'||props.option.route==='/team/registerteampartner/'
                                ?props.option.route+(params.objectiveId?params.objectiveId:params.teamId) + "/new":props.option.route==='/registerteam/'?props.option.route+params.teamId:props.option.route}>
                            <img src={props.option.icon} alt="icon" className="icon"></img>
                            {props.option.routeText}
                        </Link>
                    </div>
                :
                    <div className="menu-item" onClick={openModal}>
                        <img src={props.option.icon} alt="icon" className="icon"></img>
                        {props.option.routeText}
                    </div>
            :
                <div className="menu-item" onClick={history.goBack}>
                        <img src={Arrow} alt="icon" className="icon"></img>
                        {props.lang.Notfound.menu.option2}
                </div>
            } 
            <Modal style={showModal}>
                {params.teamId?
                    JSON.stringify(showModal)!==JSON.stringify({display:"none"})?
                        <AddPartner closeButton={openModal} lang={props.lang}></AddPartner>
                    :
                        ""
                :JSON.stringify(showModal)!==JSON.stringify({display:"none"})?
                        <AddRelation closeButton={openModal} lang={props.lang}></AddRelation>
                    :
                        ""  
                }
              
            </Modal>  
        </div>
    )
}
