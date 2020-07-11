import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("should return totalExpense as 0 if no expense", () => {
    const total = selectExpensesTotal([]);
    expect(total).toBe(0);        
});

test("should correctly addup single expense", () => {
    const total = selectExpensesTotal([expenses[1]]);
    expect(total).toBe(10000);        
});

test("should correctly addup all expenses", () => {
    const total = selectExpensesTotal(expenses);
    expect(total).toBe(14695);        
});