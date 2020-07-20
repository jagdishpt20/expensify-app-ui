import uuid from 'uuid';
import moment from 'moment';
import axios from '../axios/axios';

const _addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
});

// ADD_EXPENSE
export const addExpense = (
    {
        description= "",
        note= "",
        amount= 0,
        createdAt=0 
    } = {}  
) => {
    return (dispatch) => {
        const user = JSON.parse(sessionStorage.getItem("userData"));
        console.log("user.data.id=", user.data.id);
        const expense = {
            expenseId: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: moment(createdAt).toISOString().substring(0,10),
            userId: user.data.id
        };
        return axios.post("expenses/create", expense)
        .then((result) => {
            console.log("result.data: ",result.data);
            dispatch(_addExpense(result.data));
        });
    };
};

const _removeExpense = ({expenseId} = {}) => ({
    type: "REMOVE_EXPENSE",
    expenseId
});

// REMOVE_EXPENSE
export const removeExpense = ({expenseId} = {}) => {
    return (dispatch) => {
        return axios.delete(`expenses/remove/${expenseId}`)
        .then(() => dispatch(_removeExpense({expenseId})));
    };
};

const _editExpense = (expenseId, updates) => ({
    type: "EDIT_EXPENSE",
    expenseId,
    updates
});

export const editExpense = (expenseId, updates) => {

    const expense = {
        description: updates.description,
        note: updates.note,
        amount: updates.amount,
        createdAt: moment(updates.createdAt).toISOString().substring(0,10),
        userId: updates.userId
    };

    return (dispatch) => {
        return axios.put(`expenses/edit/${expenseId}`, expense)
        .then((response) => {
            dispatch(_editExpense(expenseId, updates));
        });
    };
};

const _getExpenses = (expenses) => ({
    type: "GET_EXPENSES",
    expenses
});

export const getExpenses = () => {
    
    return (dispatch) => {
        return axios.get("/expenses/retrieve")
            .then((response) => {
                const expenses = [];
                response.data.forEach((expense) => expenses.push(expense));
                dispatch(_getExpenses(expenses));
            }
        );      
    }    
}; 

const _getExpensesByUserId = (expenses) => ({
    type: "GET_EXPENSES_BY_USER_ID",
    expenses
});

export const getExpensesByUserId = (userId) => {
    return (dispatch) => {
        return axios.get(`/expenses/getExpensesByUserId/${userId}`)
            .then((response) => {
                const expenses = [];
                response.data.forEach((expense) => expenses.push(expense));
                dispatch(_getExpensesByUserId(expenses));            
            });
    };
};