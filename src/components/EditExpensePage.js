import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.expenseId, expense);
        this.props.history.push("/dashboard");
    };

    onRemove = () => {
        this.props.removeExpense({expenseId: this.props.expense.expenseId});
        this.props.history.push("/dashboard");
    };

    render() {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
                <div className="content-container">
                    <ExpenseForm  
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button 
                        className="button button--secondary"
                        onClick={this.onRemove}    
                    >
                        Remove Expense
                    </button>            
                </div>
            </div>            
        );
    }; 
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (expenseId, expense) => dispatch(editExpense(expenseId, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.expenseId === props.match.params.expenseId)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);