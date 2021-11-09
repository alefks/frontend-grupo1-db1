import React,{ useState, useEffect } from "react";
import Calendar from '../../components/Calendar/Calendar';
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import ObjectiveTable from "../../components/ObjectiveTable/ObjectiveTable";
import Button from "../../components/Button/Button";
import configImg from '../../img/config.png';
import './Objectives.css';
import {useParams} from "react-router-dom";
import ObjectiveBox from "../../components/ObjectiveBox/ObjectiveBox";
export default function Objectives(){
    const { teamId, quarterId } = useParams();
    const objectivesSchema = [
        {
            id                   :0,
            name                 :"",
            description          :"",
            startDate            :"",
            endDate              :"",
            keyResults           :[],
            teamId               :2,
            relationalObjectives :[],
            quarters             :[
                                    {
                                        id:0,
                                        name:""
                                    }
                                  ],
            managerId            :0,
            objectiveId          :0,
        }
    ];
    const [objectives,setObjectives] = useState(objectivesSchema);
    const team = {
        id: teamId,
        name: "financeiro",
        years: "",
        objectives: [
            {
                id                   :0,
                name                 :"contruir um prédio",
                description          :"criar estrutura predial",
                startDate            :"21/08/2020",
                endDate              :"23/04/2021",
                keyResults           :[
                                        {
    
                                        },
                                      ],
                teamId               :2,
                relationalObjectives :[
                                        {
    
                                        },
                                      ],
                quarters             :[
                                        {
                                            id:1,
                                            name:"qt1"
                                        }
                                      ],
                managerId            :0,
                objectiveId          :0,
            },
            {
                id                   :1,
                name                 :"contruir um prédio",
                description          :"criar estrutura predial",
                startDate            :"21/08/2020",
                endDate              :"23/04/2021",
                keyResults           :[
                                        {
    
                                        },
                                      ],
                teamId               :2,
                relationalObjectives :[
                                        {
    
                                        },
                                      ],
                quarters             :[
                                        {
                                            id:1,
                                            name:"qt1"
                                        }
                                      ],
                managerId            :0,
                objectiveId          :0,
            },
        ],
        teamPartners: [
            {
                id:1,
                name:"jack",
                keyResults:[],
                objectives:[],
            },
            {
                id:2,
                name:"anna",
                keyResults:[],
                objectives:[],
            },
        ]
    }
    useEffect(() => {
       if(JSON.stringify(objectives)!==JSON.stringify(team.objectives)){
           setObjectives(team.objectives);
       }
    }, [JSON.stringify(objectives)])
    const [showTable,setshow] = useState([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}]);
    const showTableChange = (event)=>{
        if(JSON.stringify(showTable)===JSON.stringify([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}])){
            event.target.parentElement.parentElement.childNodes[1].style.display = "block";
            event.target.parentElement.parentElement.childNodes[1].style.transform = "translateY(0%)";
            setshow([{display:"block",transform:"translateY(0%)"},{transform:"rotate(90deg)"}]);
        }else{
            event.target.parentElement.parentElement.childNodes[1].style.display = "none";
            event.target.parentElement.parentElement.childNodes[1].style.transform = "translateY(-70%)";
            setshow([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}]);
        }
    };

    const optionsMenu = [
        {
            route:"/registerobjectives/new",
            routeText:"New Objective"
        },
        {
            route:"/registerteampartner/new",
            routeText:"New Team Partner"
        }
    ];
    
 console.log(objectives[0].quarters[0].name)
    return (
        <div className="goalbody">
            <Menu options={optionsMenu}  hasLogo={true} logoText={objectives[0].quarters[0].name}>
            </Menu>
            {objectives.map((objective,index)=>(
                <ObjectiveBox className="goals-box" key={objective.id}>
                    <TitleBox classname="task-title goals-name" clickevent={showTableChange} key={index}>
                        <div className="text-title">
                            <DirectionBox style={showTable[1]} />
                            {objective.name}
                        </div>
                        <div className="cleanSpace" />
                    </TitleBox>
                    <div className="goals-list">
                        <div className="config-item">
                            <div className="cleanSpace" />
                            <p className="description">
                                {objective.description}
                                <br/>
                                {"Period from: "+objective.startDate+" to: "+objective.endDate}
                            </p>
                            
                            <Button>
                                <img className="config" src={configImg} alt="config" />
                            </Button>
                        </div>
                        <ObjectiveTable keyResults={objective.keyResults}></ObjectiveTable>
                        <Calendar listOfDates={objective.startDate}/>                
                    </div>
                </ObjectiveBox>
            ))}
        </div>
    );
}