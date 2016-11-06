
import React from 'react';
import { render } from 'react-dom';
//import GetDashboard from '../api/DashboardApi';
var Dashboard = require("../api/DashboardApi.js");
import Store from '../store';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//var server = require("./server.js");
var data =[
    {id:1,Habit1:"Geen frietjes eten",Habit2:"Meer water drinken",Habit3:"5Km wandelen"}



];

var Habit3Component = React.createClass(
    {
        render: function()
        {
            return (
                <div>
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
                    <HabitList data={this.props.data}/>
                </div>
            );
        }

    }
);
var HabitList= React.createClass(
    {

        render: function()
        {
            var dashboardDataList = this.props.data.map(function(p)
            {
                return (
                    <Habit3Component habit_1={p.habit_1} habit_2={p.habit_2} habit_3={p.habit_3}> </Habit3Component>
                );

            });
            return (
                <div key={data.toString()}>

                    {dashboardDataList}
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


