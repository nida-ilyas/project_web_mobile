import React from 'react';
import { render } from 'react-dom';
//import GetDashboard from '../api/DashboardApi';
var Dashboard = require("../api/DashboardApi.js");
import Store from '../store';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var data = [
    fetch(`http://192.168.88.1:8008/api/klant/1/dashboard`)
]

var DashboardComponent =  React.createClass (
    {
        render: function () {

            return (
                <div>
                    <h1>{this.props.naam}</h1>
                </div>
            );
        }
    }
);

var Post = React.createClass(
    {
        render: function () {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <DashboardList data={this.props.data}/>
                </div>
            );
        }
    });


    var DashboardList = React.createClass(
        {
        render: function() {
    var dashboardNodes = this.props.data.map(function (p) {
        return (
            <DashboardComponent naam={p.naam}></DashboardComponent>
        );
    });
    return (
        <div key={data.toString()}>
            {dashboardNodes}
        </div>
    );
}
    });



var KlantData = React.createClass(
    {
    getInitialState: function()
    {
    return {date: []};
},
componentDidMount: function(){
    $.ajax(
        {
            url: this.props.url,
            type: "POST",
            dataType: 'json',
            cacha:false,
            success: function(data){
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err){
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
},
render: function(){
    return(
        <div>
            <Post data={this.state.date}/>
        </div>
    );
}}
);
render(<Post data={data}/>, document.getElementById('container'));