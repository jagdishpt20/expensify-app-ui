import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import {addExpense} from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import {setTextFilter} from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description: "Water bill", amount: 100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: "Gas bill", amount: 300, createdAt: -1000}));
store.dispatch(addExpense({description: "Rent", amount: 1000, createdAt: 2000}));

store.dispatch(setTextFilter("bill"));

setTimeout(() => {
    store.dispatch(setTextFilter(""));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));













