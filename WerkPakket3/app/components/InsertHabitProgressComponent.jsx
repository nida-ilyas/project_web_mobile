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
var reportHabit1;
var reportHabit2;
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




    handleChange1(event){
        reportHabit1 = (event.target.value);
        return reportHabit1;
    }
    handleChange2(event){
        reportHabit2 = (event.target.value);
        return reportHabit2;
    }
    handleChange3(event){
        reportHabit3 = (event.target.value);
        return reportHabit3;
    }

    handleClick() {
        //alert("I am an alert box!");
        var date = Date.now();
        var url = "http://localhost:8081/api/klant/1/progressIngeven?progressHabit1="+reportHabit1+"&progressHabit2"+reportHabit2+"&progressHabit3"+reportHabit3+"date"+date;
        Request.post(url).then((response )=>
            {
                this.setState(
                    {
                        m: response,
                        message: 'habits progress saved!',
                        progressHabit1: reportHabit1,
                        progressHabit2: reportHabit2,
                        progressHabit3: reportHabit3,
                        date: date
                    }
                );
            }
        )
        alert("Habit progress saved!");
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

            <label>{habit1}</label>
            <select onChange={this.handleChange1.bind(this)}>
                <option value="0">Niet uitgevoerd</option>
                <option value="1">Uitgevoerd</option>
            </select>
            <br/>

            <label>{habit2}</label>
            <select onChange={this.handleChange2.bind(this)}>
                <option value="0">Niet uitgevoerd</option>
                <option value="1">Uitgevoerd</option>
            </select>

            <br/>
            <label>{habit3}</label>
            <select onChange={this.handleChange3.bind(this)}>
                <option value="0">Niet uitgevoerd</option>
                <option value="1">Uitgevoerd</option>
            </select>
            <br/>
            <Button onClick={this.handleClick} bsStyle="primary" >Submit</Button>

        </div>
    }
}
export  {InsertHabitProgressComponent as default};