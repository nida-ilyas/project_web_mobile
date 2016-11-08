import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';
import _    from 'lodash';
import Table from 'react-bootstrap/lib/Table';
import Store from '../store';

class IngaveOverzichtComponent extends React.Component{
    constructor(){
        super();
        this.state = {};
    }
    componentWillMount(){
        var url = "http://localhost:8081/api/klant/1/progresshabits";
        Request.get(url).then((response)=>
        {
            this.setState(
                {
                    date : response.body.Date,
                    habit1: response.body.Habit1,
                    habit2: response.body.Habit2,
                    habit3: response.body.Habit3,
                    progressHabit1: response.body.ProgressHabit1,
                    progressHabit2: response.body.ProgressHabit2,
                    progressHabit3: response.body.ProgressHabit3,
                    weight: response.body.Weight,
                    calories: response.body.Calories,
                    overzicht:'overzicht'
                }
            );
            Store.dispatch({ type: 'load_dashboard', data: response });
        });
        Store.subscribe(() => {
            this.setState({ overzicht: JSON.stringify(Store.getState().overzicht) });
        });
    }
    render(){
        var date = this.state.date;
        var habit1 = this.state.habit1;
        var habit2 = this.state.habit2;
        var habit3 = this.state.habit3;
        var progressHabit1 = this.state.progressHabit1;
        var progressHabit2 = this.state.progressHabit2;
        var progressHabit3 = this.state.progressHabit3;
        var weight = this.state.weight;
        var calories = this.state.calories;

        var klantInfo = _.map(this.state.klantInfo,(infoItem)=> {
            return <li>{infoItem.date}</li>;
        });


        return  <div>
            <h2>Progress Report</h2>

            <Table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>infoItem.habit_1</th>
                    <th>infoItem.habit_2</th>
                    <th>infoItem.habit_3</th>
                    <th>Weight</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{date}</td>
                    <td>{progressHabit1}</td>
                    <td>{progressHabit2}</td>
                    <td>{progressHabit3}</td>
                    <td>{weight}</td>
                    <td>{calories}</td>
                </tr>
                </tbody>
            </Table>

        </div>

    }
}
export {IngaveOverzichtComponent as default};