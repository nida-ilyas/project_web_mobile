import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    Habit3,
    IngaveOverzicht,
    insertCalories,
    insertWeight,
    overzichtPerHabit,
}   from './components';

export default (store) => {
    return(
        <Route path= "/" component={App}>
        { /* Home (main) route */ }
            <IndexRoute component ={Home} />

        { /* Catch all route */ }
        <Route path="*" component={NotFound} status={404} />
        </Route>

    );
};
