import React from "react";
import { Switch, Route } from "react-router-dom";
import menuItemsConfig from "./menuItemsConfig";
import Menu from './components/Menu/Menu';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" children={ <Menu options={menuItemsConfig.home}/> } />
            <Route exact path="/checkpoint/:objectiveId/:date" children={ <Menu options={menuItemsConfig.checkPoints}/> } />
            <Route exact path="/login" children={ <Menu options={menuItemsConfig.others} /> } />
            <Route exact path="/objectives/:teamId/:startDate/:endDate" children={ <Menu options={menuItemsConfig.objectives}/> } />
            <Route exact path="/Relations/:id" children={ <Menu options={menuItemsConfig.relations}/> } />
            <Route exact path="/keyresults/:objectiveId" children={ <Menu options={menuItemsConfig.keyResults}/> } />
            <Route exact path="/registerteam/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerkeyresult/:objectiveId/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerobjectives/:teamId/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerteampartner/:teamId/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/team/:teamId/:year" children={ <Menu options={menuItemsConfig.team}/> } />
            <Route path="*" children={ <Menu options={menuItemsConfig.others}/> } />
        </Switch>
    );
}