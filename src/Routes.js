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
import SelectLanguage from "./pages/SelectLanguage/SelectLanguage";
export default function Routes(props){
    
    return(
        <Switch>
            <Route exact path="/" children={ <Home lang={props.lang} /> } />
            <Route exact path="/team/objective/keyresults/checkpoint/:objectiveId/:date" children={ <CheckPoints lang={props.lang} /> } />
            <Route exact path="/login" children={ <Login lang={props.lang} ></Login> } />
            <Route exact path="/team/objectives/:teamId/:year/:quarter" children={ <Objectives lang={props.lang} /> } />
            <Route exact path="/team/objective/relations/:id" children={ <Relations lang={props.lang}/> } />
            <Route exact path="/team/objective/keyresults/:objectiveId" children={ <KeyResults lang={props.lang} /> } />
            <Route exact path="/registerteam/:id" children={ <RegisterTeam lang={props.lang} /> } />
            <Route exact path="/team/objective/registerkeyresult/:objectiveId/:id" children={ < RegiterKeyResult lang={props.lang} />} />
            <Route exact path="/team/registerobjectives/:teamId/:id" children={ <RegisterObjectives lang={props.lang} /> } />
            <Route exact path="/team/registerteampartner/:teamId/:id" children={ <RegisterTeamPartner lang={props.lang} /> } />
            <Route exact path="/team/:teamId/:year" children={ <Team lang={props.lang} />} />
            <Route exact path="/changelanguage" children={ <SelectLanguage/>} />
            <Route path="*"  children={ <NotFound lang={props.lang} /> } />
        </Switch>
    );
}