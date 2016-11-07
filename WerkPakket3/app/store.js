/**
 * Created by Wasla on 11/1/2016.
 */
import { createStore } from 'redux';

const  reducer = (state, action) => {
    switch (action.type){
        case 'load_dashboard':
            return Object.assign({}, state, {dashboard: action.data});
        case 'weight_inserted':
            return Object.assign({}, state, {weight: action.data});
        case 'calories_inserted':
            return Object.assign({}, state, {calories: action.data});
        case 'load_habit3':
            return Object.assign({}, state, {habits: action.data});
        case 'load_perhabit':
            return Object.assign({}, state, {weight: action.data});
        default:
            return state;
    }
}
const store = createStore(reducer, {});
export default store;