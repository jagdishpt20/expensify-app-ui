import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';

import LoadingPage from '../src/components/LoadingPage';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

// let hasRendered = false;

// const renderApp = () => {
//     if(!hasRendered) {
//         ReactDOM.render(jsx, document.getElementById("app"));
//         hasRendered = true;
//     }
// };

// ReactDOM.render(<LoadingPage />, document.getElementById("app"));

// if(!!state.auth.userId) {
//     renderApp();    
// }
// else  {
    
//     renderApp();    
//     history.push("/");
// }
















