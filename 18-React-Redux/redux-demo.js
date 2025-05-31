import { legacy_createStore as createStore} from 'redux';

const redux = require('redux');

const counterReducer = (state, action) => {
    return {
        counter: state.counter + 1
    };
};

const store = redux.createStore(counterReducer);