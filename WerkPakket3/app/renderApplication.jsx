/**
 * Created by Wasla on 11/1/2016.
 */

import React from 'react';
import { render } from 'react-dom';

import DashboardComponent from './components/DashboardComponent';
import Habit3Component from './components/Habit3Component';
import IngaveOverzichtComponent from './components/IngaveOverzichtComponent';
import InsertCaloriesComponent from './components/insertCaloriesComponent'
import InsertWeightComponent from './components/insertWeightComponent';
import OverzichtPerHabitComponent from './components/overzichtPerHabitComponent';


class App extends React.Component{
    render(){
        return(
            <div>
                <DashboardComponent/>
                <Habit3Component/>
                <IngaveOverzichtComponent/>
                <InsertCaloriesComponent/>
                <InsertWeightComponent/>
                <OverzichtPerHabitComponent/>
            </div>
        )
    }
}
const renderApplication = ()->{
    render (<MuiThemeProvider>
            <App/>
        </MuiThemeProvider>,
        document.getElementById('container')
    );
}
export default renderApplication;