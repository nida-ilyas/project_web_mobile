import GetDashboard from './api/DashboardApi';
import Store from './store';
import InsertWeightEntry from './api/WeightApi';
import InsertCaloriesEntry from './api/CaloriesApi';
import GetAllHabit from './api/HabitsAll_3Api';
import InsertHabit from './api/PerHabitApi';
import Request from 'superagent';

import renderApplication from './renderApplication';
import routes from './routes';

//renderApplication();
routes(); 

const applicationBootstrapper = () => {
    window.onload = () => {
        document.getElementById('load-button').onclick = (ev) => {
            var url = "http://localhost:8081/api/klant/1/dashboard";
            Request.get(url).then((data)=>
             {
                Store.dispatch({ type: 'load_dashboard', data });
            });
        }
    }
}

export default applicationBootstrapper;
