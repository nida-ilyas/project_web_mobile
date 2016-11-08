import React from 'react';
import { render } from 'react-dom';
import Request from 'superagent';
import _    from 'lodash';
import BootstrapTable  from 'react-bootstrap/lib/Table';
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
                    habits: response.body.rows
                }
            );
            Store.dispatch({ type: 'load_dashboard', data: response });
        });
        Store.subscribe(() => {
            this.setState({ overzicht: JSON.stringify(Store.getState().overzicht) });
        });
    }
    render(){
        var habits = this.state.habits;
        /*
        var date = this.state.date;
        var habit1 = this.state.habit1;
        var habit2 = this.state.habit2;
        var habit3 = this.state.habit3;
        var progressHabit1 = this.state.progressHabit1;
        var progressHabit2 = this.state.progressHabit2;
        var progressHabit3 = this.state.progressHabit3;
        var weight = this.state.weight;
        var calories = this.state.calories;
*/
        var klantInfo = _.map(this.state.habits,(habit)=> {

            var date = habit.date;
            var d = date.substring(0, date.indexOf('T'));

            return

            <tr>
                <td>{d}</td>
                <td>{habit.progressHabit1}</td>
                <td>{habit.progressHabit2}</td>
                <td>{habit.progressHabit3}</td>
                <td>{habit.weight}</td>
                <td>{habit.calories}</td>
            </tr>

        });



        return  <div>
            <h2>Progress Report</h2>
            <BootstrapTable>
            {klantInfo}
            </BootstrapTable>
        </div>

    }
}
export {IngaveOverzichtComponent as default};