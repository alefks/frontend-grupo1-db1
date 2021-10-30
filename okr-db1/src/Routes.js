import React from "react";
import { Switch, Route } from "react-router-dom";
import CheckPoints from './pages/CheckPoints/CheckPoints'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Goals from './pages/Goals/Goals';
import RegisterDepartment from './pages/RegisterDepartment/RegisterDepartment';
import RegiterKeyResult from './pages/RegisterKeyResult/RegisterKeyResult';
import RegisterObjective from './pages/RegisterObjective/RegisterObjective';
import RegisterPerspective from './pages/RegisterPerspective/RegisterPerspective';
import RegisterUserEmployee from './pages/RegisterUserEmployee/RegisterUserEmployee';
export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/checkpoint" component={ CheckPoints } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/goals" component={ Goals } />
            <Route exact path="/registerdepartment" component={ RegisterDepartment } />
            <Route exact path="/registerkeyresult" component={ RegiterKeyResult } />
            <Route exact path="/registerobjective" component={ RegisterObjective } />
            <Route exact path="/registerperspective" component={ RegisterPerspective } />
            <Route exact path="/registeruseremployee" component={ RegisterUserEmployee } />
        </Switch>
    );
}