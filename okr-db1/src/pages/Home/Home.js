import React from "react";
import { Link } from "react-router-dom";
import Box from './../../components/Box/Box';
import './Home.css';
import { Api } from '../../api/api'

export default function Home(){
    const [teams, setTeams] = useState(undefined);
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
    return (
        <div className="body">
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
