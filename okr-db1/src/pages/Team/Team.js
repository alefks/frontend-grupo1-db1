import React from 'react';
import Box from '../../components/Box/Box';
import Menu from '../../components/Menu/Menu';
import TeamPartnerItem from '../../components/TeamPartnerItem/TeamPartnerItem';
import TitleBox from '../../components/TitleBox/TitleBox';
import "./Team.css";
export default function Team(){
    const optionsMenu = [
        {
            route:"/registerquarter",
            routeText:"New Quarter"
        },
        {
            route:"/registerteampartner",
            routeText:"New Team Partner"
        }
    ];
    const addQuarter = ()=>{
        console.log("added new Quarter");
    }
    const addTeamPartner = ()=>{
        console.log("added new team partner");
    };
    return (
        <div className="team-body">
            <Menu options={optionsMenu}  hasLogo={true}/>
            <Box classname="box-team-Items">
                <Box classname="box-team-partner">
                    <TitleBox classname="goals-name"> 
                        Team Partners 
                        <div className="add" onClick={addTeamPartner}>+</div>
                    </TitleBox>
                    <TeamPartnerItem></TeamPartnerItem>
                </Box>
                <Box classname="box-quarters">
                    <TitleBox classname="goals-name"> 
                        Quarters 
                        <div className="add" onClick={addQuarter}>+</div>
                    </TitleBox>

                </Box>
            </Box>
        </div>
    );
}