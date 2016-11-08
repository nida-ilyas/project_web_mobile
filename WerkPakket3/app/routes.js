import React from 'react';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import DashboardComponent from './components/DashboardComponent';
import Habit3Component from './components/Habit3Component';
import IngaveOverzichtComponent from './components/IngaveOverzichtComponent';
import InsertCaloriesComponent from './components/insertCaloriesComponent'
import InsertWeightComponent from './components/insertWeightComponent';
import InsertHabitProgressComponent from  './components/InsertHabitProgressComponent'
ReactDOM.render((

    <Router  history={hashHistory}>
        <Route path="/" component={DashboardComponent} />
        <Route path="/habits" component={Habit3Component} />
        <Route path="/report" component={IngaveOverzichtComponent} />
        <Route path="/weight" component={InsertWeightComponent} />
        <Route path="/calories" component={InsertCaloriesComponent} />
        <Route path="/logprogress" component={InsertHabitProgressComponent} />

    </Router>
), document.getElementById('root'));