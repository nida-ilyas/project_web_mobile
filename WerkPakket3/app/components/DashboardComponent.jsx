import React from 'react';
import GetDashboard from '../api/DashboardApi';
import Store from '../store';
//import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card/theme.scss';

export default class DashboardComponent extends  React.Component{
    componentWillMount(){
        this.state={dashboard:'loading'};
        GetDashboard(1).then(jsondata =>{
            Store.dispatch({type: 'load_dshboard', data: jsondata});
        });

        Store.subscribe(() =>{
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard)});
        });
    }

    render(){
        return(
<p>Heloo you there</p>
        )
    }
}