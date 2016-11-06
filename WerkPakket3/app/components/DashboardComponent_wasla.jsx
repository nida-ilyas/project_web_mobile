
import React from 'react';
import { render } from 'react-dom';
//import GetDashboard from '../api/DashboardApi';
var Dashboard = require("../api/DashboardApi.js");
import Store from '../store';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//var server = require("./server.js");
var data =[
    {id:1,naam:"Nida", habit_1:"Geen frietjes eten",habit_2:"Meer water drinken",habit_3:"5Km wandelen",Weight:60,Calories:1000}
];

var DashboardComponent = React.createClass(
    {
       render: function()
       {
           return (
               <div>
                   <h1> {this.props.naam} </h1>
                   <h2>Weight</h2>
                   {this.props.Weight}
                   <h2>Calories</h2>
                   {this.props.Calories}
                    <h2>Habits </h2>
                  <ul> <li> {this.props.habit_1}</li>
                      <li> {this.props.habit_2}</li>
                      <li> {this.props.habit_3}</li>
                  </ul>



                   {this.props.children}


               </div>
           );
       }

    }
);

    var Post = React.createClass(
    {
        render: function()
    {
        return (
        <div>
        <h1>Dashboard</h1>
            <DashboardList data={this.props.data}/>
        </div>
        );
    }

    }
    );

    var DashboardList= React.createClass(
    {

        render: function()
    {
        var dashboardNodes = this.props.data.map(function(p)
    {
        return (
        <DashboardComponent naam={p.naam} Weight={p.Weight} Calories={p.Calories} habit_1={p.habit_1} habit_2={p.habit_2} habit_3={p.habit_3}> </DashboardComponent>
        );

    });
        return (
        <div key={data.toString()}>

        {dashboardNodes}
        </div>
        );
    }

    }
    );
var KlantData = React.createClass(
    {
        getInitialState: function()
        {
            return {data:[]};
        },
        componentDidMount: function()
        {
            $.ajax(
                {
                    url: this.props.url,
                    dataType:'json',
                    cacha:false,
                    success: function(data)
                    {
                        this.setState({data: data});

                    }.bind(this),
                    error: function(xhr, status, err)
                    {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });
        },
        render: function()
        {
            return(
                <div>
                    <Post data={this.state.data}/>
                </div>
            );
        }
    }
);

    render(<Post data={data}/> , document.getElementById('container')) ;
/*
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

 */


/*
export default class DashboardComponent extends React.Component
{
    componentWillMount() {
        this.state = { dashboard: 'loading' };
        ("http://127.0.0.1:8008/klant/1/dashboard").then(jsondata => {
            Store.dispatch({ type: 'load_dashboard', data: jsondata });
        });

        Store.subscribe(() => {
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard) });
        });

    }

    render() {
        return (<div>
            <h1>Dashboard </h1>
        </div>);

    }



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