import React from 'react';
import {connect} from 'react-redux';
import ExpenseList from './ExpenseList'; 
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';
import {getExpensesByUserId} from '../actions/expenses';

class ExpenseDashboardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    
    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem("userData"));
        this.setState(() => ({name: user.data.name}));                
        this.props.getExpensesByUserId(user.data.id);
    }

    render() {
        return (
            <div>
                <h3>Welcome {this.state.name}!</h3>
                <ExpensesSummary />
                <ExpenseListFilters />
                <ExpenseList />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getExpensesByUserId: (userId) => { dispatch(getExpensesByUserId(userId))}
});

export default connect(undefined, mapDispatchToProps)(ExpenseDashboardPage);
