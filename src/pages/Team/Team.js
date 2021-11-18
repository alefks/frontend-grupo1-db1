import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import BoxItem from "../../components/BoxItem/BoxItem";
import Box from "./../../components/Box/Box";
import Pencil from "./../../img/icons/pencil.png";
import "./Team.css";
export default function Team() {
    const params = useParams();
    const date = new Date();
    const testTeam = {
        id: 1,
        name: "",
        objectives: [
            {
                id: 1,
                startDate:
                    date.getDay() +
                    "-" +
                    (date.getMonth() + 1) +
                    "-" +
                    date.getFullYear(),
                endDate:
                    date.getDay() +
                    "-" +
                    (date.getMonth() + 1) +
                    "-" +
                    date.getFullYear(),
            },
            {
                id: 2,
                startDate:
                    date.getDay() +
                    "-" +
                    (date.getMonth() + 1) +
                    "-" +
                    date.getFullYear(),
                endDate:
                    date.getDay() +
                    "-" +
                    (date.getMonth() + 1) +
                    "-" +
                    date.getFullYear(),
            },
        ],
        teamPartners: [
            {
                id: 1,
                name: "julia",
                teamId: 1,
            },
            {
                id: 2,
                name: "pedro",
                teamId: 2,
            },
            {
                id: 3,
                name: "livia",
                teamId: 1,
            },
        ],
    };

    const quaters = [1, 2, 3, 4];

    const [team, setTeam] = useState(testTeam);
    
    const fetchGetTeam = async () => {
        const response = await Api.getById("team", params.teamId);
        const result = await response.json();
        setTeam(result);
    };

    useEffect(() => {
        fetchGetTeam();
    }, []);
    return (
        <div className="body">
            <Box classname="team-box">
                <Box classname="team-partners-list">
                    {team.teamPartners.map((partner) => (
                        <BoxItem key={partner.id}>
                            <Link
                                to={`/registerteampartner/${params.teamId}/${partner.id}`}
                            >
                                {partner.name}
                                <img className="icon" src={Pencil} alt="edit" />
                            </Link>
                        </BoxItem>
                    ))}
                </Box>
                <Box classname="team-quarters-list">
                    {quaters.map((objective, index) => (
                        <BoxItem key={index}>
                            <Link
                                to={
                                    "/objectives/" +
                                    params.teamId +
                                    `/${params.year}/${index + 1}`
                                }
                            >
                                {"quarter " + (index + 1)}
                            </Link>
                        </BoxItem>
                    ))}
                </Box>
            </Box>
        </div>
    );
}
