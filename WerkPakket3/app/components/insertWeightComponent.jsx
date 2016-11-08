import React from 'react';
import Request  from 'superagent';
import Store from '../store';
import _    from 'lodash';
import InsertWeightEntry from '../api/WeightApi';

class InsertWeightComponent extends React.Component {

    constructor() {
        super();
        this.state = {}
        /* this.insertWeight = this.insertWeight.bind(this)*/

    }
    componentWillMount()
    {
        // called the first time the component is loaded right before the component is added to the page
        var url = "http://localhost:8081/api/klant/1/weightoverzicht";
        Request.get(url).then((response)=>
        {
            this.setState( // that wil cause the render method to cause again
                {

                    /*  date: response.body.date,*/
                    /* weight: response.body.weight  ;*/
                    weight: response.body.rows});
            Store.dispatch({ type: 'weight_inserted', data: response })
        });

        Store.subscribe(() => {
            this.setState({ weight: JSON.stringify(Store.getState().weight) });
        });

    }
    insertWeight(ev) {
        ev.preventDefault();
        const date = ev.target['insert-weight-form-date'].value;
        const weight = Number(ev.target['insert-weight-form-weight'].value);
        var url = "http://localhost:8081/api/klant/1/postweight?weight="+weight+ '&date='+date;
        Request.post(url).then((response )=>
        {
            this.setState(
                {
                    m : response,
                    message: 'weight is geupdated',
                    date: date,
                    weight: weight

                } );
        });

    }


    render() {
        var date = this.state.date;
        var weight = this.state.weight;
        var message = this.state.message;



        return (
            <div>

                <form id="insert-weight-form" onSubmit={this.insertWeight.bind(this)}>
                    <h3> Update Weight </h3>
                    <input type="date" width="300px"  name="insert-weight-form-date" required  />
                    <input type="number" width="300px"  name="insert-weight-form-weight" required />
                    <input type="submit"  />
                    {message}



                </form>





            </div>
        )
    }
}
export  {InsertWeightComponent as default};



