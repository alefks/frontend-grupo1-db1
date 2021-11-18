import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckPoints from './pages/CheckPoints/CheckPoints'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Objectives from './pages/Objectives/Objectives';
import Relations from './pages/Relations/Relations';
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
            <Route exact path="/checkpoint/:objectiveId/:date" component={ CheckPoints } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/objectives/:teamId/:year/:quarter" component={ Objectives } />
            <Route exact path="/Relations/:id" component={ Relations } />
            <Route exact path="/keyresults/:objectiveId" component={ KeyResults } />
            <Route exact path="/registerteam/:id" component={ RegisterTeam } />
            <Route exact path="/registerkeyresult/:objectiveId/:id" component={ RegiterKeyResult } />
            <Route exact path="/registerobjectives/:teamId/:id" component={ RegisterObjectives } />
            <Route exact path="/registerteampartner/:teamId/:id" component={ RegisterTeamPartner } />
            <Route exact path="/team/:teamId/:year" component={ Team } />
            <Route path="*" component={ NotFound } />
        </Switch>
    );
}