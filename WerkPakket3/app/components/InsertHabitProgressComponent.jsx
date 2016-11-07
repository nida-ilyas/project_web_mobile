import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import ReactBootstrap from 'react-bootstrap';

var FormGroup = ReactBootstrap.FormGroup;

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


    render()
    {
        var habit1 = this.state.habit1;
        var habit2 = this.state.habit2;
        var habit3 = this.state.habit3;
        var habits = _.map(this.state.habits,(habit)=>
        {
            return  <li>{habit.Habit1}</li>;
        });


        return  <div>

            <input ref="textBox" type="text"/>
            <h2>Habits </h2>
            <ul>
                <li>{habit1}</li>
                <li>{habit2}</li>
                <li>{habit3}</li>
            </ul>

            <FormGroup controlId="formControlsSelect">
                <ControlLabel>{habit1}</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                    <option value="select">Uitgevoerd</option>
                    <option value="other">Niet uitgevoerd</option>
                </FormControl>
            </FormGroup>


        </div>
    }



}
export  {InsertHabitProgressComponent as default};