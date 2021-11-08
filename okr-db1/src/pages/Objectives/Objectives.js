import React,{ useState } from "react";
import Calendar from '../../components/Calendar/Calendar';
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import ObjectiveTable from "../../components/ObjectiveTable/ObjectiveTable";
import Button from "../../components/Button/Button";
import configImg from '../../img/config.png';
import './Objectives.css';
export default function Objectives(){
    const [showTable,setshow] = useState([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}]);
    const showTableChange = ()=>{
        if(JSON.stringify(showTable)===JSON.stringify([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}])){
            setshow([{display:"block",transform:"translateY(0%)"},{transform:"rotate(90deg)"}]);
        }else{
            setshow([{display:"none",transform:"translateY(-70%)"},{transform:"rotate(0deg)"}]);
        }
    };
    const optionsMenu = [
        {
            route:"/registergoals",
            routeText:"New Objective"
        },
        {
            route:"/registeruseremployee",
            routeText:"New Team Partner"
        }
    ];
    const listOfDates=[
        {
            date: "21/08"
        },
        {
            date: "23/08"
        }, 
        {
            date: "25/08"
        }
    ];
    const objectives = [
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

                                    },
                                  ],
            managerId            :0,
            objectiveId          :0,
          },
    ];
    return (
        <div className="goalbody"> 
            <Menu options={optionsMenu}  hasLogo={true}>

            </Menu>
            {objectives.map((objective)=>(
                <section className="goals-box" key={objective.id}>
                    <TitleBox classname="task-title goals-name" clickevent={showTableChange}>
                        <DirectionBox style={showTable[1]} />
                        {objective.name}
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
                        <Calendar styleCalendar={showTable[0]} listOfDates={listOfDates}/>                
                    </div>
                </section>
            ))}
        </div>
    );
}