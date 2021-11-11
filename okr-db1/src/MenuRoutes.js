import React from "react";
import { Switch, Route } from "react-router-dom";
import menuItemsConfig from "./menuItemsConfig";
import Menu from './components/Menu/Menu';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" children={ <Menu options={menuItemsConfig.home}/> } />
            <Route exact path="/checkpoint" children={ <Menu options={menuItemsConfig.checkPoints}/> } />
            <Route exact path="/login" children={ <Menu options={menuItemsConfig.others} /> } />
            <Route exact path="/objectives/:teamId/:quarterId" children={ <Menu options={menuItemsConfig.objectives}/> } />
            <Route exact path="/objective/:id" children={ <Menu options={menuItemsConfig.objective}/> } />
            <Route exact path="/keyresults/:id" children={ <Menu options={menuItemsConfig.keyResults}/> } />
            <Route exact path="/registerteam/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerkeyresult/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerobjectives/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/registerteampartner/:id" children={ <Menu options={menuItemsConfig.others}/> } />
            <Route exact path="/team/:teamId" children={ <Menu options={menuItemsConfig.team}/> } />
            <Route path="*" children={ <Menu options={menuItemsConfig.others}/> } />
        </Switch>
    );
}