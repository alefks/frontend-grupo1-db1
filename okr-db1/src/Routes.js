import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckPoints from './pages/CheckPoints/CheckPoints'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Objectives from './pages/Objectives/Objectives';
import RegisterTeam from './pages/RegisterTeam/RegisterTeam';
import RegiterKeyResult from './pages/RegisterKeyResult/RegisterKeyResult';
import RegisterObjectives from './pages/RegisterObjectives/RegisterObjectives';
import RegisterQuarter from './pages/RegisterQuarter/RegisterQuarter';
import RegisterTeamPartner from './pages/RegisterTeamPartner/RegisterTeamPartner';
import Team from "./pages/Team/Team";
import NotFound from "./pages/NotFound/NotFound";
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/checkpoint" component={ CheckPoints } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/objectives" component={ Objectives } />
            <Route exact path="/registerteam" component={ RegisterTeam } />
            <Route exact path="/registerkeyresult" component={ RegiterKeyResult } />
            <Route exact path="/registerobjectives" component={ RegisterObjectives } />
            <Route exact path="/registerquarter" component={ RegisterQuarter } />
            <Route exact path="/registerteampartner" component={ RegisterTeamPartner } />
            <Route exact path="/team" component={ Team } />
            <Route path="*" component={ NotFound } />
        </Switch>
    );
}