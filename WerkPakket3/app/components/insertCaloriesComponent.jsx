import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import InsertWeightEntry from '../api/WeightApi';

class InsertCaloriesComponent extends React.Component {

    constructor() {
        super();
        this.state = {}

    }
    componentWillMount()
    {
        // called the first time the component is loaded right before the component is added to the page
        var url = "http://localhost:8081/api/klant/1/caloriesoverzicht";
        Request.get(url).then((response)=>
        {
            this.setState( // that wil cause the render method to cause again
                {
                    date: response.body.date,
                    weight: response.body.calories  });
        });

    }
    render() {
        var date = this.state.date;
        var calories = this.state.calories;

        return (
            <div>

                <form id="insert-weight-form" onSubmit={this.insertWeight}>
                    <input type="date" width="300px" name="insert-weight-form-date" required />
                    <input type="number" width="300px" name="insert-weight-form-weight" required />
                    <input type="submit" />
                    {this.state.message}
                </form>


                <ul>

                    <li> <h2> Date:</h2>   {date} </li>
                    <li> <h2>Calories </h2>{calories}</li>
                </ul>

            </div>
        )
    }
}
export  {InsertCaloriesComponent as default};