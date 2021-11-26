import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import BoxItem from "../../components/BoxItem/BoxItem";
import MessageToast from "../../components/MessageToast/MessageToast";
import Modal from "../../components/Modal/Modal";
import DeleteItem from "../../components/DeleteItem/DeleteItem";
import Trash from "./../../img/icons/white-trash.png";
import Box from "./../../components/Box/Box";
import Pencil from "./../../img/icons/pencil.png";
import TeamLoader from "../../components/ContentLoaders/TeamLoader";
import "./Team.css";
export default function Team(props) {
    const lang = props.lang.Teams.page;
    const [showModal,setShowModal] = useState({display:"none"});
    const [ deleteId, setDeleteId ] = useState(0);
    const [message,setMessage] = useState({mssg:"",show:false});
    const openModal = (event)=>{
        event.preventDefault();
        setDeleteId(event.target.id);
        if(JSON.stringify(showModal)===JSON.stringify({display:"none"})){
            setShowModal({display:"flex"});
        }else{
            setShowModal({display:"none"});
        }
    };
    const params = useParams();
    const date = new Date();
    // const testTeam = {
    //     id: 1,
    //     name: "",
    //     objectives: [
    //         {
    //             id: 1,
    //             startDate:
    //                 date.getDay() +
    //                 "-" +
    //                 (date.getMonth() + 1) +
    //                 "-" +
    //                 date.getFullYear(),
    //             endDate:
    //                 date.getDay() +
    //                 "-" +
    //                 (date.getMonth() + 1) +
    //                 "-" +
    //                 date.getFullYear(),
    //         },
    //         {
    //             id: 2,
    //             startDate:
    //                 date.getDay() +
    //                 "-" +
    //                 (date.getMonth() + 1) +
    //                 "-" +
    //                 date.getFullYear(),
    //             endDate:
    //                 date.getDay() +
    //                 "-" +
    //                 (date.getMonth() + 1) +
    //                 "-" +
    //                 date.getFullYear(),
    //         },
    //     ],
    //     teamPartners: [
    //         {
    //             id: 1,
    //             name: "julia",
    //             teamId: 1,
    //         },
    //         {
    //             id: 2,
    //             name: "pedro",
    //             teamId: 2,
    //         },
    //         {
    //             id: 3,
    //             name: "livia",
    //             teamId: 1,
    //         },
    //     ],
    // };

    const quaters = [1, 2, 3, 4];
    const [loading,setLoading] = useState(true);
    const [team, setTeam] = useState([]);
    
    const fetchGetTeam = async () => {
        setLoading(true);
        const response = await Api.getById("team", params.teamId);
        const result = await response.json();
        setTeam(result);
        if(localStorage.getItem("defaultTeam")){
            localStorage.removeItem("defaultTeam");
        }
        localStorage.setItem("defaultTeam",result.name);
        setLoading(false);
        
    };

    useEffect(() => {
        fetchGetTeam();
        if(localStorage.getItem("message")){
            setMessage({mssg:localStorage.getItem("message"),show:true});
            localStorage.removeItem("message");
        }
    }, []);
    if(loading===true){
        return(
        <TeamLoader>

        </TeamLoader>
        );
    }else{
    return (
        <div className="body">
            {message.show?
                    <MessageToast message={message.mssg}/>
                :
                    ""
            }
            <Box classname="boxtitle boxtitle3">{team.name}</Box>
            <Box classname="team-box">
                <div className="team-content">
                <Box classname="boxtitle boxtitle2">{lang.titlePartner}</Box>
                <Box classname="team-partners-list">
                    <Box classname="box-view">
                    {team.teamPartners.map((partner) => (
                        <BoxItem classname="team-partner-item" key={partner.id}>
                            {partner.name}
                            <div className="options">
                                <Link
                                    to={`/team/registerteampartner/${params.teamId}/${partner.id}`}
                                >
                                    <img className="icon" src={Pencil} alt="edit" />
                                </Link>
                                <img src={Trash} className="trash-icon" alt="trash" id={partner.id} onClick={openModal} />
                            </div>
                        </BoxItem>
                    ))}
                    </Box>
                </Box>
                </div>
                <div className="team-content">
                <Box classname="boxtitle boxtitle2">{lang.titleQuarters}</Box>
                <Box classname="team-quarters-list">
                    <Box classname="box-view">
                    {quaters.map((objective, index) => (
                        <BoxItem key={index}>
                            <Link
                                to={
                                    "/team/objectives/" +
                                    params.teamId +
                                    `/${params.year}/${index + 1}`
                                }
                            >
                                {"quarter " + (index + 1)}
                            </Link>
                        </BoxItem>
                    ))}
                    </Box>
                </Box>
                </div>
            </Box>
            <Modal style={showModal}>
                {JSON.stringify(showModal)!==JSON.stringify({display:"none"})?
                    <DeleteItem lang={props.lang} closeButton={openModal} idItem={deleteId} teamId={params.teamId} table={"partner"}></DeleteItem>
                :
                    ""
                }
            </Modal> 
        </div>
    );
    }
}
