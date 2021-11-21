import React from "react";
import { Switch, Route } from "react-router-dom";
import menuItemsConfig from "./menuItemsConfig";
import Menu from './components/Menu/Menu';

export default function Routes(props){
    return(
        <Switch>
            <Route exact path="/" children={ <Menu lang={props.lang} options={menuItemsConfig.home}/> } />
            <Route exact path="/checkpoint/:objectiveId/:date" children={ <Menu lang={props.lang} options={menuItemsConfig.checkPoints}/> } />
            <Route exact path="/login" children={ <Menu lang={props.lang} options={menuItemsConfig.others} /> } />
            <Route exact path="/objectives/:teamId/:startDate/:endDate" children={ <Menu lang={props.lang} options={menuItemsConfig.objectives}/> } />
            <Route exact path="/relations/:id" children={ <Menu lang={props.lang} options={menuItemsConfig.relations}/> } />
            <Route exact path="/keyresults/:objectiveId" children={ <Menu lang={props.lang} options={menuItemsConfig.keyResults}/> } />
            <Route exact path="/registerteam/:id" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/> } />
            <Route exact path="/registerkeyresult/:objectiveId/:id" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/> } />
            <Route exact path="/registerobjectives/:teamId/:id" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/> } />
            <Route exact path="/registerteampartner/:teamId/:id" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/> } />
            <Route exact path="/team/:teamId/:year" children={ <Menu lang={props.lang} options={menuItemsConfig.team}/> } />
            <Route exact path="/changelanguage" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/>} />
            <Route path="*" children={ <Menu lang={props.lang} options={menuItemsConfig.others}/> } />
        </Switch>
    );
}