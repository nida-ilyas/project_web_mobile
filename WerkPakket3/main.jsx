import React from 'react';
import { render } from 'react-dom';

//import Dashboard from './app/components/DashboardComponent_wasla.jsx';
//import Habits3 from './app/components/Habit3Component.jsx';

import Dashboard from './app/components/DashboardComponent.jsx';
import Habits3 from './app/components/Habit3Component.jsx';

import InsertWeight from './app/components/InsertWeightComponent.jsx';


//render(<WelcomeComponent />, document.getElementById('container'));
render(<Dashboard />, document.getElementById('container'));
//render(<Habits3 />, document.getElementById('container'));
//render(<InsertWeight />, document.getElementById('container'));