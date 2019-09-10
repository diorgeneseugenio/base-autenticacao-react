import { createStore, compose, applyMiddleware } from 'redux';
import { Reducers } from '../reducers';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    Reducers,
    composeEnhancer(applyMiddleware(thunk))
);