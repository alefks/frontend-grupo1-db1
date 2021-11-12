import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Box from './../../components/Box/Box';
import './Home.css';
import Api from '../../api/api'

export default function Home(){
    const testTeamsList = [
        {
            id : 1,
            name : "financeiro",
            objectives : [],
            teamPartners : [],
            score : 50
        },
        {
            id : 2,
            name : "financeiro",
            objectives : [],
            teamPartners : [],
            score : 50
        },
        {
            id : 3,
            name : "financeiro",
            objectives : [],
            teamPartners : [],
            score : 50
        },
        {
            id : 4,
            name : "financeiro",
            objectives : [],
            teamPartners : [],
            score : 50
        },
    
    ];
    const [Year,setYear] = useState(0);
    useEffect(() => {
        if(Year===0){
            setYear((new Date()).getFullYear());
        }
    }, [Year])

    const [teams, setTeams] = useState(testTeamsList);
    const [years, setYears] = useState(undefined);

    const fetchGetTeams = async () => {
        const response = await Api.getAll("team");
        const result = await response.json();
        setTeams(result);
    };

    const fetchGetYears = async () => {
        const response = await Api.getAll("years");
        const result = await response.json();
        setYears(result);
    }

    useEffect(() => {
        fetchGetTeams();
        fetchGetYears();
    }, []);
    
    const changeYear = (event)=>{
        const selectElement = event.target;
        const selectValue = selectElement.childNodes[selectElement.selectedIndex].value;
        setYear(parseInt(selectValue));
    }
    const changeQuarter = (event)=>{
        const selectElement = event.target;
        const selectValue = selectElement.childNodes[selectElement.selectedIndex].value;
        setYear(parseInt(selectValue));
    }
    console.log(Year);
    const Years = [2019,2018,2021,2017,2016].sort().reverse();
    return (
        <div className="body">
            <div className="select">
                <select name="year" className="select-item" onChange={changeYear}>
                {Years.map((year,index)=>(
                    <option value={year} key={index}>{year}</option>
                ))}                 
                </select>
                <select name="quarter" className="select-item" onChange={changeQuarter}>
                    {['quarter1','quarter2','quarter3','quarter4','2 First quarters','2 Last quarters','All quarters'].map((quarter,index)=>(
                        <option value={quarter} key={index}>{quarter}</option>
                    ))}
                </select>
            </div>
            <Box classname="teams-list">
                {testTeamsList.map((teamItem)=>(
                    <Box classname="teams-item" key={teamItem.id}>
                        <Link to={"/team/"+teamItem.id}>
                            <label className="team-name">
                                {teamItem.name}
                            </label>
                            <label className="team-score">
                                {teamItem.score}%
                            </label>
                            <hr className={"team-score-color alert"} />
                        </Link>
                    </Box>
                ))}
            </Box>
        </div>
    ); 
}
