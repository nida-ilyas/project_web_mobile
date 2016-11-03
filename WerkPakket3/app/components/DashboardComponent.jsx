import React from 'react';
import GetDashboard from '../api/DashboardApi';
import Store from '../store';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

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
            <Card>
                <CardTitle
                    title="Dashboard"
                    subtitle={this.state.dashboard}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expendable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                </CardText>
            </Card>
        )
    }
}