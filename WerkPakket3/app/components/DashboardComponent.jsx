import React from 'react';
import GetDashboard from '../api/DashboardApi';
import Store from '../store';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class DashboardComponent extends React.Component {
    componentWillMount() {
        this.state = { dashboard: 'loading' };
        GetDashboard("/api/klant/1/dashboard").then(jsondata => {
            Store.dispatch({ type: 'load_dashboard', data: jsondata });
        });

        Store.subscribe(() => {
            this.setState({ dashboard: JSON.stringify(Store.getState().dashboard) });
        });
    }
    render() {
        return (
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
            </Card>
        )
    }
}