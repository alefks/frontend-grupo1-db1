import React,{ useState } from "react";
import Calendar from './../../components/Calendar/Calendar';
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import './Goals.css';
export default function Goals(){
    const [show,setshow] = useState({"height":0,transform:"translateY(-70%)"});
    const showTable = ()=>{
        if(JSON.stringify(show)===JSON.stringify({"height":0,transform:"translateY(-70%)"})){
            setshow({"height":"auto",transform:"translateY(0%)"});
        }else{
            setshow({"height":0,transform:"translateY(-70%)"});
        }
    };
    return (
        <div className="body"> 
            <Menu route="/registergoals" routeText="New Goal">

            </Menu>
            <section className="goals-box">
                <TitleBox classname="task-title goals-name" clickevent={showTable}>
                    <DirectionBox />
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
                    <Calendar styleCalendar={show}/>                
                </div>
            </section>
        </div>
    );
}