
const expensesReducerDefaultState = [];

// expensesReducer
export default (state=expensesReducerDefaultState, action) => {
    switch(action.type) {
        case "ADD_EXPENSE": 
            return [
                ...state,
                action.expense
            ];
            
        case "REMOVE_EXPENSE": 
            return state.filter(({expenseId})  => ( expenseId !== action.expenseId));
        case "EDIT_EXPENSE": 
            return state.map((expense)  => {
                if( expense.expenseId === action.expenseId) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });

        case "GET_EXPENSES":
            return action.expenses;

        case "GET_EXPENSES_BY_USER_ID": 
            return action.expenses;

        default:
            return state;
    }
}; 

