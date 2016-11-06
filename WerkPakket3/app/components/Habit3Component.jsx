import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';

class Habit3Component extends React.Component
{
    constructor()
    {
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
          <ul>
              <li>{habit1}</li>
              <li>{habit2}</li>
              <li>{habit3}</li>

              </ul>

        </div>
    }



}
export  {Habit3Component as default};

