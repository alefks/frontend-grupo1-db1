import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckPoints from './pages/CheckPoints/CheckPoints'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Objectives from './pages/Objectives/Objectives';
import Objective from './pages/Objective/Objective';
import KeyResults from "./pages/keyResults/KeyResults";
import RegisterTeam from './pages/RegisterTeam/RegisterTeam';
import RegiterKeyResult from './pages/RegisterKeyResult/RegisterKeyResult';
import RegisterObjectives from './pages/RegisterObjectives/RegisterObjectives';
import RegisterTeamPartner from './pages/RegisterTeamPartner/RegisterTeamPartner';
import Team from "./pages/Team/Team";
import NotFound from "./pages/NotFound/NotFound";
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/checkpoint" component={ CheckPoints } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/objectives/:id/:startDate/:endDate" component={ Objectives } />
            <Route exact path="/objective/:id" component={ Objective } />
            <Route exact path="/keyresults/:objectiveId" component={ KeyResults } />
            <Route exact path="/registerteam/:id" component={ RegisterTeam } />
            <Route exact path="/registerkeyresult/:id" component={ RegiterKeyResult } />
            <Route exact path="/registerobjectives/:id" component={ RegisterObjectives } />
            <Route exact path="/registerteampartner/:id" component={ RegisterTeamPartner } />
            <Route exact path="/team/:teamId" component={ Team } />
            <Route path="*" component={ NotFound } />
        </Switch>
    );
}