import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';
import _    from 'lodash';

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
                    calories: response.body.Calories
                }
            );
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
            <h2>Klant {naam}</h2>
            <ul>
                <li>{naam}</li>
                <li>{habit1}</li>
                <li>{habit2}</li>
                <li>{habit3}</li>
                <li>{weight}</li>
                <li>{calories}</li>
            </ul>
        </div>
    }
}
export {DashboardComponent as default};