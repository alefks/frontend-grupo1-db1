import React from "react";
import ListTeams from "../../components/ListTeams/ListTeams";
import Menu from "./../../components/Menu/Menu";
import OptionsList from "../../components/OptionsList/OptionsList";
import "./Home.css";
import { useEffect, useState } from "react/cjs/react.production.min";
import { Api } from "../../api/api";

export default function Home() {
    const [listTeams, setListTeams] = useState([]);
    const menuOptions = [
        {
            route: "/registerteam/new",
            routeText: "New Team",
        },
    ];

    const fetchGetAllTeams = async () => {
        const response = await Api.getAll("team");
        const result = await response.json();
        setListTeams(result);
    };

    useEffect(() => {
        fetchGetAllTeams();
    }, []);

    const testListTeams = [
        {
            id: 1,
            departmentName: "financial",
            totalValue: 30,
        },
        {
            id: 2,
            departmentName: "comercial",
            totalValue: 60,
        },
        {
            id: 3,
            departmentName: "developer",
            totalValue: 100,
        },
        {
            id: 4,
            departmentName: "financial",
            totalValue: 30,
        },
        {
            id: 5,
            departmentName: "comercial",
            totalValue: 60,
        },
        {
            id: 6,
            departmentName: "developer",
            totalValue: 100,
        },
    ];
    const options = [
        {
            name: "2020",
            value: 2020,
        },
        {
            name: "2021",
            value: 2021,
        },
    ];
    return (
        <div className="homeBody">
            <Menu options={menuOptions} hasLogo={false} />
            <ListTeams teams={testListTeams} year="2021">
                <OptionsList options={options}></OptionsList>
            </ListTeams>
        </div>
    );
}
