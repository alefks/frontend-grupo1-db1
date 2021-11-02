import React,{ useState } from "react";
import Calendar from './../../components/Calendar/Calendar';
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import './Goals.css';
export default function Goals(){
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
            routeText:"New Goal"
        },
        {
            route:"/registeruseremployee",
            routeText:"New Team Partner"
        }
    ]
    return (
        <div className="body"> 
            <Menu options={optionsMenu}  hasLogo={true}>

            </Menu>
            <section className="goals-box">
                <TitleBox classname="task-title goals-name" clickevent={showTableChange}>
                    <DirectionBox style={showTable[1]} />
                   {"Objective Name"}
                </TitleBox>
                <div className="goals-list">
                    <div className="goals">
                        <div className="column">
                            <div className="title">
                                KR'S
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                KEY RESULTS
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                OBJECTIVE OWNER
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                FREQUENCE TIME
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                OBJECTIVE TYPE
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                START DATE
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        <div className="column">
                            <div className="title">
                                FINAL DATE
                            </div>
                            <div className="obj-item">
                            </div>
                        </div>
                        
                    </div>  
                    <Calendar styleCalendar={showTable[0]}/>                
                </div>
            </section>
        </div>
    );
}