
import React from 'react';

var Hello = React.createClass(
    {
        render: function () {
            return (<div>
               <h1>Dashboard </h1>
            </div>);

        }
    });
export default Hello;





/*
import React from 'react';
//import GetDashboard from '../api/DashboardApi';
var Dashboard = require("../api/DashboardApi.js");
import Store from '../store';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
;
//var server = require("./server.js");

export default class DashboardComponent extends React.Component
{



}
*/



    /*
    loadDashboardFromServer()
    {
        var self= this ;


        this.state = { dashboard: 'loading' };
        var getdashboard = new Dashboard("klant/1/dashboard","localhost:8008").then(jsondata => {
            Store.dispatch({ type: 'load_dashboard', data: jsondata });
        });

        Store.subscribe(() => {
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard) });
        });
       

    }


    componentWillMount() {
        this.loadCategoriesFromServer();

    }
    render() {

        var self = this;
        var dashboard = this.state.dashboard.map(function(dboard)
        {
            var data = dboard.data();
            return <li key="{data.id}>{data.title}{"></li>
        });

        return (



        <ul>
            {dashboard}
         </ul>
*/
                /*
            <Card>
                <CardHeader
                    title="Dashboard"
                    subtitle={this.state.dashboard}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
               </CardText>
            </Card>  */
    /*
        )
    }
}
        */