
// getExpensesTotal
export default (expenses) => {
    if(expenses.length === 0) {
        return 0;
    }
    else {
      let total = 0;  
      expenses.forEach((expense) => total += parseFloat(expense.amount));  
      return total;
    }
};


// return expenses.map((expense) => expense.amount).
// reduce((sum, value) => sum + value, 0);    