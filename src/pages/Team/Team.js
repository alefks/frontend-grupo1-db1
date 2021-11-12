import React from 'react';
import { Link } from 'react-router-dom';
import BoxItem from '../../components/BoxItem/BoxItem';
import Box from './../../components/Box/Box';
import Pencil from './../../img/icons/pencil.png';
import "./Team.css";
export default function Team(){
  const date = (new Date());
    const team = {
        id           :1,
        name         :"",
        objectives   :[
          {
            id          :1,
            startDate   :(date.getDay())+"-"+((date.getMonth())+1)+"-"+(date.getFullYear()),
            endDate     :(date.getDay())+"-"+((date.getMonth())+1)+"-"+(date.getFullYear()),
          },
          {
            id          :2,
            startDate   :(date.getDay())+"-"+((date.getMonth())+1)+"-"+(date.getFullYear()),
            endDate     :(date.getDay())+"-"+((date.getMonth())+1)+"-"+(date.getFullYear()),
          },
        ],
        teamPartners :[
          {
            id         :1,
            name       :"julia",
          },
          {
            id         :2,
            name       :"pedro",
          },
          {
            id         :3,
            name       :"livia",
          },
          
        ],
      };
    const quarters = [];
    return (
      <div className="body">
        <Box classname="team-box" >
          <Box classname="team-partners-list">
            {
              team.teamPartners.map((partner)=>(
                <BoxItem key={partner.id}>
                  <Link to={"/registerteampartner/"+partner.id}>
                    {partner.name}
                    <img className="icon" src={Pencil} alt="edit" />  
                  </Link>
                </BoxItem>
              ))
            }
          </Box>
          <Box classname="team-quarters-list" >
            {
              team.objectives.map((objective,index)=>(
                <BoxItem key={index}>
                  <Link to={"/objectives/"+team.id+"/"+objective.startDate+"/"+objective.endDate}>{"quarter " + (index+1)}</Link>
                </BoxItem>
              ))
            }
          </Box>
        </Box>
      </div>
    );
}