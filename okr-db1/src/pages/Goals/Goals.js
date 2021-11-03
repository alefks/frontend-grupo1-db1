import React,{ useState } from "react";
import Calendar from './../../components/Calendar/Calendar';
import DirectionBox from "../../components/DirectionBox/DirectionBox";
import Menu from "../../components/Menu/Menu";
import TitleBox from "../../components/TitleBox/TitleBox";
import GoalsTable from "../../components/GoalsTable/GoalsTable";
import Button from "../../components/Button/Button";
import configImg from '../../img/config.png';
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
    ]
    return (
        <div className="goalbody"> 
            <Menu options={optionsMenu}  hasLogo={true}>

            </Menu>
            <section className="goals-box">
                <TitleBox classname="task-title goals-name" clickevent={showTableChange}>
                    <DirectionBox style={showTable[1]} />
                   {"Objective Name"}
                </TitleBox>
                <div className="goals-list">
                    <Button>
                       <img className="config" src={configImg} alt="config" />
                   </Button>
                    <GoalsTable></GoalsTable>
                    <Calendar styleCalendar={showTable[0]} listOfDates={listOfDates}/>                
                </div>
            </section>
        </div>
    );
}