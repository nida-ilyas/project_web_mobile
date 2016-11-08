import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';
import _    from 'lodash';
import Store from '../store';

class DashboardComponent extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    componentWillMount(){
        var url = "http://localhost:8081/api/klant/1/dashboard";
        Request.get(url).then((response)=>
        {
            this.setState(
                {
                    naam : response.body.naam,
                    habit1: response.body.Habit1,
                    habit2: response.body.Habit2,
                    habit3: response.body.Habit3,
                    weight: response.body.Weight,
                    calories: response.body.Calories,
                    dashboard: 'loading'// 'loading'
                } );
            Store.dispatch({ type: 'load_dashboard', data: response })
        });
        Store.subscribe(() => {
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard) });
        });

    }

    render(){
        var naam =  this.state.naam;
        var habit1 = this.state.habit1;
        var habit2 = this.state.habit2;
        var habit3 = this.state.habit3;
        var weight = this.state.weight;
        var calories = this.state.calories;

        var klantInfo = _.map(this.state.klantInfo,(infoItem)=>
        {
            return <li>{infoItem.naam}</li>;
        });


        return  <div>
            <h2>Dashboard voor {naam}</h2>

                <h3>{naam}</h3>
                <h4>Habits: </h4>
                <p>{habit1}</p>
                <p>{habit2}</p>
                <p>{habit3}</p>

                <p><b>Weight: </b>{weight}</p>
                <p><b>Calories: </b>{calories}</p>

        </div>
    }
}
export {DashboardComponent as default};