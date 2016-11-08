import React from 'react';
import { render } from 'react-dom';
import Dashboard from './app/components/DashboardComponent.jsx';

/* === DASHBOARD === */
/*


    import Dashboard from './app/components/DashboardComponent.jsx';
    render(<Dashboard />, document.getElementById('container'));


/* === Overzicht_3Habits === */
/*
    import Habits3 from './app/components/Habit3Component.jsx';
    render(<Habits3 />, document.getElementById('container'));
*/


/* === InsertWeight === */
/*
 import InsertWeight from './app/components/InsertWeightComponent.jsx';
 render(<InsertWeight />, document.getElementById('container'));
*/

//import InsertCalories from './app/components/InsertCaloriesComponent.jsx';
//render(<InsertCalories />, document.getElementById('container'));



/* === InsertHabitProgressComponent === */

    render(<InsertHabitProgressComponent/>, document.getElementById('container'));
    import InsertHabitProgressComponent from './app/components/InsertHabitProgressComponent.jsx';

/*
import IngaveOverzicht from './app/components/IngaveOverzichtComponent.jsx';
render(<IngaveOverzicht />, document.getElementById('container'));
    */

function openDashboard() {
 render(<Dashboard />, document.getElementById('container'));
}