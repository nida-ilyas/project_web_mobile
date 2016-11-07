import GetDashboard from './api/DashboardApi';
import Store from './store';
import InsertWeightEntry from './api/WeightApi';
import InsertCaloriesEntry from './api/CaloriesApi';
import GetAllHabit from './api/HabitsAll_3Api';
import InsertHabit from './api/PerHabitApi';

import renderApplication from './renderApplication';

renderApplication();

const applicationBootstrapper = ()=> {
    window.onload = () =>{
        GetDashboard(1).then()(data=>{
            Store.dispatch({
                type:'load_dashboard', data
            });
        })
    }
}
export  default applicationBootstrapper;