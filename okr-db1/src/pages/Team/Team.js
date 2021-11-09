import React from 'react';
import Box from '../../components/Box/Box';
import Menu from '../../components/Menu/Menu';
import TeamItem from '../../components/TeamItem/TeamItem';
import TitleBox from '../../components/TitleBox/TitleBox';
import {useParams} from "react-router-dom";
import "./Team.css";
export default function Team(){
    const { teamId } = useParams();
    const optionsMenu = [
        {
            route:"/registerquarter/new",
            routeText:"New Quarter"
        },
        {
            route:"/registerteampartner/"+teamId+"/new",
            routeText:"New Team Partner"
        }
    ];
    const team = {
        id: teamId,
        name: "financeiro",
        years: "",
        objectives: [],
        teamPartners: [
            {
                id:1,
                name:"jack",
                keyResults:[],
                objectives:[]
            },
            {
                id:2,
                name:"anna",
                keyResults:[],
                objectives:[]
            },
        ]
    };
    const quartersTeam = [
        {
            id:1,
            name:"qt1",
            objectives:[]
        },
        {
            id:2,
            name:"qt2",
            objectives:[]
        },
        {
            id:3,
            name:"qt3",
            objectives:[]
        },
        {
            id:4,
            name:"qt4",
            objectives:[]
        },
    ]
    const addQuarter = ()=>{
        console.log("added new Quarter");
    };
    const addTeamPartner = ()=>{
        console.log("added new team partner");
    };
    return (
        <div className="team-body">
            <Menu options={optionsMenu}  hasLogo={true} teamId={teamId} logoText={team.name} />
            <Box classname="box-team-Items">
                <Box classname="box-team-partner">
                    <TitleBox classname="goals-name"> 
                        Team Partners 
                        <div className="add" onClick={addTeamPartner}>+</div>
                    </TitleBox>
                    <Box classname="box-items">
                        {team.teamPartners.map((partner)=>(
                            <TeamItem locationpage={"registerteampartner/"+teamId} key={partner.id} id={partner.id}>{partner.name}</TeamItem>
                        ))}
                    </Box>
                </Box>
                <Box classname="box-quarters">
                    <TitleBox classname="goals-name"> 
                        Quarters 
                        <div className="add" onClick={addQuarter}>+</div>
                    </TitleBox>
                    <Box classname="box-items">
                        {quartersTeam.map((quarter)=>(
                            <TeamItem locationpage={"objectives/"+teamId} id={quarter.id} key={quarter.id}>{quarter.name}</TeamItem>
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}