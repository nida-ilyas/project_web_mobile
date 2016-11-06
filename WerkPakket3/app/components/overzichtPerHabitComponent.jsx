import React from 'react';
import ReactDOM from 'react-dom';
/*
export default class OverzichtPerHabitComponent extends React.Component {
    constructor() {
        super();
        this.Habit = this.Habit.bind(this);
        this.updateState = this.updateState.bind(this);
    }

/*
    Habit(id) {
        fetch(`${ApiUrl}/klant/1/progresshabit3`, {
            method: 'get', mode: 'cors'
        }).then(data=> {
            data.json().then(
                habit => {
                    const id = habit.Id;
                    const desc = habit.Habit3;
                    this.setState({id, desc});
                }
            );
        });
    }

    updateState(event){
        const id = event.target.value;
        this.Habit(id);
    }
*/


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('container')
);