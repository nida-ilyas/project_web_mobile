import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import InsertCaloriesEntry from '../api/CaloriesApi';
import Store from '../store';

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
                    m: response,
                   /* date: response.body.date,*/
                    calories: response.body.rows
                   /* calories: response.body.calories */ });

            Store.dispatch({ type: 'calories_inserted', data: response });
        });

        Store.subscribe(() => {
            this.setState({ calories: JSON.stringify(Store.getState().calories) });
        });


    }
    insertWeight(ev) {
        ev.preventDefault();
        const date = ev.target['insert-calories-form-date'].value;
        const calories = Number(ev.target['insert-calories-form-calories'].value);
        var url = "http://localhost:8081/api/klant/1/calories?calories="+calories+ '&date='+date;
        Request.put(url).then((response )=>
        {
            this.setState(
                {
                    m : response,
                    message: 'Calories zijn geupdated',
                      date: date,
                    calories: calories

                } );
        });

    }
    /*

     onChangeCalories(e)
     {
     this.setState(ev.target['insert-weight-form-weight'].value)

     }
     onChangeDate(e)
     {
     this.setState(ev.target['insert-weight-form-date'].value)

     }
     */

    render() {
      /*  var date = this.state.date;*/
       /* var calories = this.state.calories;*/
        var message = this.state.message;
        /*
        var calories = _.map(this.state.calories,(calorie)=>
        {
            for(var i in calorie)
            {
                return   <li> Calories{calorie.date}</li>, <li>{calorie.calories}</li>;
            }

        });
*/


        return (
            <div>


                <form id="insert-calories-form" onSubmit={this.insertWeight.bind(this)}>
                    <h3> Update Calories </h3>
                    <input type="date" width="300px"  name="insert-calories-form-date" required  />
                    <input type="number" width="300px"  name="insert-calories-form-calories" required />
                    <input type="submit"  />
                    {message}



                </form>





            </div>
        )
    }
}
export  {InsertCaloriesComponent as default};


/*
 <form id="insert-weight-form" onSubmit={this.insertWeight}>
 <input type="date" width="300px" name="insert-weight-form-date" required />
 <input type="number" width="300px" name="insert-weight-form-weight" required />
 <input type="submit" />
 {this.state.message}

 </form>*/

