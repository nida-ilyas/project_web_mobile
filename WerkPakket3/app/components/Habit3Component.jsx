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
                 habits: response.body.Habit1,
                 habits: response.body.Habit2,
                 habits: response.body.Habit3,



             });
        });

    }


    render()
    {

        var klanthabits = _.map(this.state.klanthabits,(habit)=>
        {
            return  <li>{habit.Habit1}</li>;
        });


        return  <div>

            <input ref="textBox" type="text"/>
          <ul>{klanthabits}</ul>
        </div>
    }



}
export  {Habit3Component as default};

