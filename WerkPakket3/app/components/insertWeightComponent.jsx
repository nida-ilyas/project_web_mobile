import React from 'react';
import Request  from 'superagent';
import _    from 'lodash';
import InsertWeightEntry from '../api/WeightApi';

export default class InsertWeightComponent extends React.Component {
    constructor() {
        super();
        this.state = {}

    }
    componentWillMount()
        {
            // called the first time the component is loaded right before the component is added to the page
            var url = "localhost:8081/api/klant/1/weightoverzicht";
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
            <form id="insert-weight-form" onSubmit={this.insertWeight}>
                <input type="date" width="300px" name="insert-weight-form-date" required />
                <input type="number" width="300px" name="insert-weight-form-weight" required />
                <input type="submit" />
                {this.state.message}

            </form>
                <table>
                    <th>Weight</th>
                    <tr>
                        <td>Weight</td>
                        <td>Date</td>
                    </tr>
                    <tr>
                        <td>{date}</td>
                        <td>{weight}</td>
                    </tr>
                </table>
                </div>
        )
    }
}




