import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Box from './../../components/Box/Box';
import './Home.css';
import Api from '../../api/api'
import HomePageLoader from "../../components/ContentLoaders/HomePageLoader";

export default function Home(props){
    const lang=props.lang.Home.page;
    // const testTeamsList = [
    //     {
    //         id : 1,
    //         name : "financeiro",
    //         objectives : [],
    //         teamPartners : [],
    //         score : 50
    //     },
    //     {
    //         id : 2,
    //         name : "financeiro",
    //         objectives : [],
    //         teamPartners : [],
    //         score : 50
    //     },
    //     {
    //         id : 3,
    //         name : "financeiro",
    //         objectives : [],
    //         teamPartners : [],
    //         score : 50
    //     },
    //     {
    //         id : 4,
    //         name : "financeiro",
    //         objectives : [],
    //         teamPartners : [],
    //         score : 50
    //     },
    
    // ];
    const [loading,setLoading] = useState(true);
    const [selectedYear,setSelectedYear] = useState((new Date()).getFullYear());
    useEffect(() => {
        fetchGetTeams();
        
        //fetchGetYears();
    }, [selectedYear])
   
    const testYears = [2019,2018,2021,2017,2016].sort().reverse();

    const [teams, setTeams] = useState([]);
    const [years, setYears] = useState(testYears);

    const fetchGetTeams = async () => {
        setLoading(true);
        const response = await Api.getAll("team");
        const result = await response.json();
        result !== [] && setTeams(result);
        setLoading(false);
    };

    const fetchGetYears = async () => {
        const response = await Api.getAll("years");
        const result = await response.json();
        result !== [] && setYears(result);
    }
    
    const changeYear = (event)=>{
        const selectElement = event.target;
        const selectValue = selectElement.childNodes[selectElement.selectedIndex].value;
        setSelectedYear(parseInt(selectValue));
    }
    const changeQuarter = (event)=>{
        const selectElement = event.target;
        const selectValue = selectElement.childNodes[selectElement.selectedIndex].value;
        setSelectedYear(parseInt(selectValue));
    }
    if(loading===true){
        return(
        <HomePageLoader>

        </HomePageLoader>
        );
    }else{
    return (
        <div className="body">
            <div className="select">
                <div className="team-title">
                    {lang.title}
                </div>
                <select name="year" className="select-item" onChange={changeYear}>
                {years.map((year,index)=>(
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
                {teams.map((teamItem)=>(
                    <Box classname="teams-item" key={teamItem.id}>
                        <Link to={"/team/"+teamItem.id+"/"+selectedYear}>
                            <label className="team-name">
                                {teamItem.name}
                            </label>
                           
                            <hr className={"team-score-color alert"} />
                        </Link>
                    </Box>
                ))}
            </Box>
        </div>
    ); 
    }
}
