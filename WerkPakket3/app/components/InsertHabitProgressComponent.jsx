import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
/*
import Button from 'react-bootstrap/lib/Button';
// or
import { Button } from 'react-bootstrap';
*/
var reportHabit3;

class InsertHabitProgressComponent extends React.Component{

    constructor(){
        super();
        this.state = {};

    }
    componentWillMount()
    {
        // called the first time the component is loaded right before the component is added to the page
        var url = "http://localhost:8081/api/klant/1/habits";
        Request.get(url).then((response)=>
        {
            this.setState( // that wil cause the render method to cause again
                {

                    habit1: response.body.Habit1,
                    habit2: response.body.Habit2,
                    habit3: response.body.Habit3
                });
        });

    }

    handleClick() {
        //alert("I am an alert box!");
        alert(reportHabit3);
    }


    handleChange(event){
        reportHabit3 = (event.target.value);
        return reportHabit3;
    }



    render()
    {
        // current date
        var currentTime = new Date();
        var month = currentTime.getMonth() + 1;
        var day = currentTime.getDate();
        var year = currentTime.getFullYear();
        var d = month + "/" + day + "/" + year;


        var habit1 = this.state.habit1;
        var habit2 = this.state.habit2;
        var habit3 = this.state.habit3;
        var habits = _.map(this.state.habits,(habit)=>
        {
            return  <li>{habit.Habit1}</li>;
        });


        return  <div>

            <h2>Invoer: {d}</h2>
            <ul>
                <li>{habit1}</li>
                <li>{habit2}</li>
                <li>{habit3}</li>
            </ul>


            <label>{habit3}</label>
            <select onChange={this.handleChange.bind(this)}>
                <option value="habit3NotDone">Niet uitgevoerd</option>
                <option value="habit3Done">Uitgevoerd</option>
            </select>

            <Button onClick={this.handleClick} bsStyle="primary" >Submit</Button>

        </div>
    }
}
export  {InsertHabitProgressComponent as default};