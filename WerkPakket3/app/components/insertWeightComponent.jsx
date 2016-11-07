import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import InsertWeightEntry from '../api/WeightApi';

class InsertWeightComponent extends React.Component {

    constructor() {
        super();
        this.state = {}

    }
    componentWillMount()
        {
            // called the first time the component is loaded right before the component is added to the page
            var url = "http://localhost:8081/api/klant/1/weightoverzicht";
            Request.get(url).then((response)=>
            {
                this.setState( // that wil cause the render method to cause again
                    {
                        date: response.body.date,
                        weight: response.body.weight  });
            });

    }
    render() {
        var date = this.state.date;
        var weight = this.state.weight;

        return (
            <div>
                <table>
                    <th>Date</th>
                    <th>Weight</th>

                    <tr>
                        <td>{date}</td>
                        <td>{weight}</td>
                    </tr>
                </table>


               

            </div>
        )
    }
}
export  {InsertWeightComponent as default};


/*
<form id="insert-weight-form" onSubmit={this.insertWeight}>
    <input type="date" width="300px" name="insert-weight-form-date" required />
    <input type="number" width="300px" name="insert-weight-form-weight" required />
    <input type="submit" />
    {this.state.message}

</form>*/

